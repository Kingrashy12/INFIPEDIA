import { MdLocalGroceryStore, MdVideoLibrary } from "react-icons/md";
import { BsFire, BsPeopleFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { FaBookmark, FaUserCircle, FaUsersCog } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RiCommunityLine } from "react-icons/ri";

export const sidenavdata = [
  {
    icon: <HiHome size={25} className="icons" />,
    label: "Home",
    link: "/",
    title: "Home",
  },
  {
    icon: <FaUserCircle size={25} className="icons" />,
    label: "Profile",
    isUser: true,
  },
];
export const sidenavdataI = [
  {
    icon: <BiMessageDetail className="icons" size={25} />,
    label: "Messages",
    link: "/messages",
    title: "Messages",
  },
  {
    icon: <MdVideoLibrary className="icons" size={25} />,
    label: "Videos",
    link: "/videos",
    title: "Videos",
  },
  {
    icon: <FaBookmark className="icons" size={25} />,
    label: "Saved",
    link: "/saved",
    title: "Find Post, Video that you've saved",
  },
  {
    icon: <BsPeopleFill className="icons" size={25} />,
    label: "People",
    link: "/users",
    title: "People",
  },
  {
    icon: <RiCommunityLine className="icons" size={25} />,
    label: "Community",
    link: "/community",
    title: "Community",
  },
  {
    icon: <MdLocalGroceryStore size={25} className="icons" />,
    label: "Store",
    link: "/store",
    title: "Marketplace",
  },
  {
    icon: <BsFire className="icons" size={25} />,
    label: "Trending",
    link: "/trending",
    title: "Trending Posts, Videos",
  },
];
export const sidenavdataII = [
  {
    icon: <AiOutlineSetting size={25} />,
    label: "Setting",
    link: "/setting",
    title: "Setting",
  },
  // {
  //   icon: <FiHelpCircle size={25} />,
  //   label: "Help",
  //   link: "/help",
  //   title: "Help",
  // },
];
