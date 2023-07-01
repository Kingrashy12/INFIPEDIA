import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { DropSearchWrapper } from "../../styles/libs/DropSearch.styled";
import { IoIosSearch } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToHistry } from "../../store/histroySlice";

const DropSearchFilter = ({ data, navigate, video }) => {
  const [text, setText] = useState("");
  const [hover, setHover] = useState(false);
  const views = useSelector((state) => state.views.savedItems);

  const dispatch = useDispatch();

  function onSearch(searchTerm) {
    setText("");
  }

  return (
    <div className="relative flex flex-col">
      <DropSearchWrapper
        className={`flex items-center bg-slate-800 p-2 ${
          text ? "rounded-t-lg" : "rounded-lg"
        } justify-between relative h-auto max-[700px]:w-60 max-[700px]:p-1`}
        video={video}
      >
        <RiSearchLine
          size={30}
          className="cursor-pointer text-white bg p-1 rounded-md"
        />
        <input
          type="text"
          placeholder="Search Videos"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`p-1 h-auto relative bg-transparent rounded ${
            video && "w-full"
          } outline-none text-white font-semibold font-sofia`}
        />
      </DropSearchWrapper>
      {text && (
        <div className="absolute bg-white shadow shadow-black z-z-70 top-11 w-full h-auto p-3 rounded-b-lg">
          {data
            ?.filter((d) => {
              const searchTerm = text.toLowerCase();
              const name = d?.desc?.toLowerCase();

              return (
                searchTerm && name.includes(searchTerm) && name !== searchTerm
              );
            })
            .map((d) => (
              <div
                className="flex /items-center gap-2 cursor-pointer hover:bg-neutral-300 p-2 rounded-lg"
                onClick={() => {
                  navigate(`/video/${d._id}`);
                  dispatch(addToHistry(d));
                  onSearch(d?.desc);
                }}
              >
                {views.map((v) => (
                  <>
                    {v?.desc === d?.desc ? (
                      <MdHistory size={20} title="Viwed" />
                    ) : (
                      <IoIosSearch size={20} title="Search" />
                    )}
                  </>
                ))}
                <p className="font-poppin font-semibold text-sm mb-2">
                  {d?.desc}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropSearchFilter;
