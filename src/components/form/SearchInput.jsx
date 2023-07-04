import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  ResultContainer,
  SearchResultP,
  StyledSearch,
  StyledSearchConatiner,
  StyledSearchImg,
} from "../../styles/components/SearchInput.styled";
import { useSelector } from "react-redux";
import { Male, PlaceholderImage } from "../../asset";

const SearchInput = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(false);
  const usersdata = useSelector((state) => state.users.list);

  const onSearch = (searchTerm) => {
    setText("");
  };
  return (
    <StyledSearchConatiner className="relative flex flex-col">
      <StyledSearch
        className={`flex items-center bg-slate-800 p-2 ${
          text ? "rounded-t-lg" : "rounded-lg"
        } justify-between w-80 relative h-auto max-[700px]:gap-1 max-[700px]:p-0 max-[700px]:w-full`}
      >
        <RiSearchLine
          size={30}
          className="cursor-pointer text-white bg p-1 max-[350px]:hidden rounded-md"
        />
        <input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="p-1 h-auto relative bg-transparent rounded w-64 max-[700px]:p-0 max-[700px]:w-52 outline-none text-white font-semibold font-sofia"
        />
      </StyledSearch>
      {text && (
        <ResultContainer className="shadow shadow-black -z-z-70">
          {usersdata
            .filter((user) => {
              const searchTerm = text.toLowerCase();
              const name = user.name.toLowerCase();

              return (
                searchTerm && name.includes(searchTerm) && name !== searchTerm
              );
            })
            .map((user) => (
              <div
                className="flex items-center gap-2 mt-5 cursor-pointer hover:bg-neutral-300 p-2 rounded-lg"
                onClick={() => {
                  navigate(`/${user.username}`);
                  onSearch(user.name);
                }}
              >
                {empty ? (
                  <p className="font-sofia text-red-600 text-xl">No user</p>
                ) : (
                  <>
                    <StyledSearchImg
                      src={user.userProfile?.url || PlaceholderImage}
                      alt="Avatar"
                    />
                    <SearchResultP className="font-sofia">
                      {user.name}
                    </SearchResultP>
                  </>
                )}
              </div>
            ))}
        </ResultContainer>
      )}
    </StyledSearchConatiner>
  );
};

export default SearchInput;
