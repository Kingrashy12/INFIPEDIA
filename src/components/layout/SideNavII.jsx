import React from "react";
import {
  StyledSideNavI,
  StyledSideNavIWrapp,
} from "../../styles/layout/SideNav.styled";
import { sidenavdata, sidenavdataI, sidenavdataII } from "../../data/sidenav";
import { Link, useLocation, useParams } from "react-router-dom";
import { ActiveLinkDivider } from "../../libs";
import { useSelector } from "react-redux";

const SideNavII = () => {
  const path = useLocation();
  const auth = useSelector((state) => state.credentails);
  const { username } = useParams();
  return (
    <StyledSideNavIWrapp className="relative left-0 max-[700px]:hidden w-72 -mt-28 p-0 h-full">
      <StyledSideNavI className="fixed w-72 bg-white pt-5 mt-36 left-0 h-full border-r border-r-neutral-400 pr-2">
        {sidenavdata.map((item, index) => (
          <Link
            to={item.isUser ? `/${auth?.username}` : item.link}
            className="flex gap-1 h-auto items-center relative"
            key={index}
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
              className={`flex mt-6 cursor-pointer gap-2 items-center relative pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
            >
              <>{item.icon}</>
              <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
                {item.isUser ? `${auth.name}` : item.label}
              </p>
            </div>
          </Link>
        ))}

        <hr className="mb- mt-2" />
        {sidenavdataI.map((item, index) => (
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
              className={`flex mt-6 cursor-pointer gap-2 items-center relative pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
            >
              <>{item.icon}</>
              <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
                {item.label}
              </p>
            </div>
          </Link>
        ))}

        <hr className="mb- mt-2" />
        {sidenavdataII.map((item, index) => (
          <Link
            to={
              !auth?._id && item.label === "Setting" ? "/auth/login" : item.link
            }
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
              className={`flex mt-6 cursor-pointer gap-2 items-center relative pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
            >
              <>{item.icon}</>
              <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </StyledSideNavI>
    </StyledSideNavIWrapp>
  );
};

export default SideNavII;
