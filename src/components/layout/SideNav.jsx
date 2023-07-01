import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle, FaUsersCog } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import { MdLocalGroceryStore, MdVideoLibrary } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { ActiveLinkDivider } from "../../libs";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import {
  StyledSideNavI,
  StyledSideNavIWrapp,
} from "../../styles/layout/SideNav.styled";
import SideNavImage from "../user/SideNavImage";

const SideNav = ({ videoPage }) => {
  const auth = useSelector((state) => state.credentails);
  const path = useLocation();
  const { username } = useParams();
  return (
    <StyledSideNavIWrapp className="relative left-0 max-[700px]:hidden w-72 -mt-28 p-0 h-full">
      <StyledSideNavI className="fixed w-72 bg-white pt-5 mt-36 left-0 h-full border-r border-r-neutral-400">
        <Link to="/" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}

          <div
            title="Home"
            className={`flex mt-6 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <HiHome size={25} className="icons" />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Home
            </p>
          </div>
        </Link>
        <Link
          to={`/${auth.username}`}
          className="flex gap-1 h-auto items-center relative"
        >
          {path.pathname === `/${username}` ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Profile"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            {auth?._id ? (
              <SideNavImage user={auth} />
            ) : (
              <FaUserCircle size={25} className="icons" />
            )}
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              {auth?.name || "Profile"}
            </p>
          </div>
        </Link>
        <hr className="mb-2 mt-2" />
        <Link
          to="/messages"
          className="flex gap-1 h-auto items-center relative"
        >
          {path.pathname === "/messages" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Messages"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <BiMessageDetail className="icons" size={25} />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Messages
            </p>
          </div>
        </Link>
        <Link to="/videos" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/videos" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Videos"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <MdVideoLibrary className="icons" size={25} />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Videos
            </p>
          </div>
        </Link>
        <Link to="/users" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/users" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Followers"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <BsPeopleFill className="icons" size={25} />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Followers
            </p>
          </div>
        </Link>
        <Link to="/store" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/store" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="MartketPlace"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <MdLocalGroceryStore size={25} className="icons" />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Store
            </p>
          </div>
        </Link>
        <hr className="mt-1" />
        <Link to="/store" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/store" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Account"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <FaUsersCog size={25} />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Manage Users
            </p>
          </div>
        </Link>
        <Link to="/store" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/store" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Account"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <AiOutlineSetting size={25} />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Setting
            </p>
          </div>
        </Link>
        <Link to="/store" className="flex gap-1 h-auto items-center relative">
          {path.pathname === "/store" ? (
            <ActiveLinkDivider />
          ) : (
            <div className="border-l-4 h-12  items-center self-end flex border-l-blue-50" />
          )}
          <div
            title="Help"
            className={`flex mt-3 cursor-pointer gap-2 items-center pl-2 hover:bg-neutral-300 rounded-lg p-2 w-full`}
          >
            <FiHelpCircle size={25} />
            <p className="font-sofia font-semibold text-lg max-[1024px]:hidden">
              Help
            </p>
          </div>
        </Link>
      </StyledSideNavI>
    </StyledSideNavIWrapp>
  );
};

export default SideNav;
