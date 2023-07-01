import React from "react";
import {
  ChatNavContainer,
  ChatNavWrapper,
} from "../../../styles/layout/chats/styled.nav";
import { Link, useLocation, useParams } from "react-router-dom";
import { ActiveLinkDivider } from "../../../libs";

import { useSelector } from "react-redux";
import {
  chatnavdata,
  chatnavdataI,
  chatnavdataII,
} from "../../../data/chatnav";

const SideNavLinks = () => {
  const auth = useSelector((state) => state.credentails);
  const path = useLocation();
  const { username } = useParams();
  return (
    <ChatNavWrapper>
      <ChatNavContainer>
        {chatnavdata.map((item, index) => (
          <Link
            key={index}
            to={item.isUser ? `/${auth?.username}` : item.link}
            className="flex gap-1 h-auto items-center relative"
          >
            {path.pathname === `${item.isUser ? `/${username}` : item.link}` ? (
              <ActiveLinkDivider />
            ) : (
              <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
            )}
            <div
              title={
                item.isUser
                  ? `${auth?._id ? auth.name : "Profile"} `
                  : item.title
              }
              className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2`}
            >
              <>{item.icon}</>
            </div>
          </Link>
        ))}
        <hr className="mb-2 mt-2" />
        {chatnavdataI.map((item, index) => (
          <Link
            to={item.link}
            className="flex gap-1 h-auto items-center relative"
            key={index}
          >
            {path.pathname === `${item.link}` ? (
              <ActiveLinkDivider />
            ) : (
              <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
            )}
            <div
              title={item.title}
              className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2`}
            >
              <>{item.icon}</>
            </div>
          </Link>
        ))}
        <hr className="mb-2 mt-2" />
        {chatnavdataII.map((item, index) => (
          <Link
            to={item.link}
            className="flex gap-1 h-auto items-center relative"
            key={index}
          >
            {path.pathname === `${item.link}` ? (
              <ActiveLinkDivider />
            ) : (
              <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
            )}
            <div
              title={item.title}
              className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2`}
            >
              <>{item.icon}</>
            </div>
          </Link>
        ))}
      </ChatNavContainer>
    </ChatNavWrapper>
  );
};

export default SideNavLinks;
