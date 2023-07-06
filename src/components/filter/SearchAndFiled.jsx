import React, { useState } from "react";
import {
  StyledRecentConrainer,
  StyledResultUserImg,
  StyledSearchForm,
  StyledSearchFormInput,
  StyledUserResultContainer,
} from "../../styles/components/form/search";
import { FlexBetween } from "../../styles/common/Global";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useSearchModal } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { PlaceholderImage } from "../../asset";
import { HeaderOne, Libography } from "../../libs";
import { useNavigate } from "react-router-dom";
import { addRecent, removeRecent } from "../../store/UsersSlice";
import { AiFillDelete } from "react-icons/ai";

const SearchAndFiled = () => {
  const searchmodal = useSearchModal();
  const users = useSelector((state) => state.users.list);
  const recent = useSelector((state) => state.users?.recent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function Close() {
    searchmodal.onClose();
  }
  const [query, setQuery] = useState("");

  function goToUser(user) {
    navigate(`/${user.username}`);
    dispatch(addRecent(user));
    Close();
  }
  function goTouser(user) {
    navigate(`/${user.username}`);
    Close();
  }
  // function removeOne(user) {
  //   dispatch(removeRecent(user._id));
  // }
  // function clearAll() {
  //   dispatch(removeAllRecent());
  // }
  return (
    <StyledSearchForm>
      <FlexBetween>
        <FlexBetween className="items-center bg-slate-300 p-1 rounded-lg w-[80%] pl-4">
          <BiSearch size={24} />
          <StyledSearchFormInput
            placeholder="Search User"
            className="font-sofia text-black placeholder:text-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FlexBetween>
        <IoClose
          className="p-1 cursor-pointer bg-neutral-400 rounded-full"
          size={28}
          onClick={Close}
        />
      </FlexBetween>
      <StyledUserResultContainer>
        {users
          .filter((user) => {
            const name = user.name.toLowerCase();
            const searchTerm = query.toLowerCase();
            const uname = user.username.toLowerCase();

            return (
              (searchTerm &&
                name.includes(searchTerm) &&
                name !== searchTerm) ||
              (searchTerm && uname.includes(searchTerm) && uname !== searchTerm)
            );
          })
          .map((user, index) => (
            <div
              className="flex items-center gap-3"
              key={index}
              onClick={() => goToUser(user)}
            >
              <StyledResultUserImg
                src={user?.userProfile?.url || PlaceholderImage}
              />
              <div className="flex flex-col gap-[-4px]">
                <Libography
                  fontSofia
                  text={user.name}
                  className="text-[19px]"
                />
                <Libography
                  fontSofia
                  text={`@ ${user.username}`}
                  className="text-[15px] text-slate-500"
                />
              </div>
            </div>
          ))}
        {!query && (
          <StyledRecentConrainer>
            <FlexBetween>
              <HeaderOne
                fontSofia
                text="Recent"
                className="text-[26px]"
                fontBold
              />
              <Libography fontSofia text="Clear all" className="underline" />
            </FlexBetween>
            <hr />
            {recent &&
              recent.map((user, index) => (
                <FlexBetween>
                  <div
                    className="flex items-center gap-3"
                    key={index}
                    onClick={goTouser}
                  >
                    <StyledResultUserImg
                      src={user?.userProfile?.url || PlaceholderImage}
                    />
                    <div className="flex flex-col gap-[-4px]">
                      <Libography
                        fontSofia
                        text={user.name}
                        className="text-[19px]"
                      />
                      <Libography
                        fontSofia
                        text={`@ ${user.username}`}
                        className="text-[15px] text-slate-500"
                      />
                    </div>
                  </div>
                  <AiFillDelete
                    size={25}
                    onClick={() => dispatch(removeRecent(user._id))}
                  />
                </FlexBetween>
              ))}
          </StyledRecentConrainer>
        )}
      </StyledUserResultContainer>
    </StyledSearchForm>
  );
};

export default SearchAndFiled;
