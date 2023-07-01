import { HiHome } from "react-icons/hi";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdLocalGroceryStore, MdVideoLibrary } from "react-icons/md";
import { BsFire, BsPeopleFill } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { RiCommunityLine } from "react-icons/ri";

export const chatnavdata = [
  {
    icon: <HiHome size={25} className="icons" />,
    link: "/",
    title: "Home",
  },
  {
    icon: <FaUserCircle size={25} className="icons" />,
    label: "Profile",
    isUser: true,
  },
];

export const chatnavdataI = [
  {
    icon: <BiMessageDetail className="icons" size={25} />,
    link: "/messages",
    title: "Messages",
  },
  {
    icon: <MdVideoLibrary className="icons" size={25} />,
    link: "/videos",
    title: "Videos",
  },
  {
    icon: <FaBookmark className="icons" size={25} />,
    link: "/saved",
    title: "Saved",
  },
  {
    icon: <BsPeopleFill className="icons" size={25} />,
    link: "/users",
    title: "People",
  },
  {
    icon: <RiCommunityLine className="icons" size={25} />,
    link: "/community",
    title: "Community",
  },
  {
    icon: <MdLocalGroceryStore size={25} className="icons" />,
    link: "/store",
    title: "Marketplace",
  },
  {
    icon: <BsFire className="icons" size={25} />,
    link: "/trending",
    title: "Trending Posts, Videos",
  },
];
export const chatnavdataII = [
  {
    icon: <AiOutlineSetting size={25} />,
    link: "/setting",
    title: "Setting",
  },
  // {
  //   icon: <FiHelpCircle size={25} />,
  //   link: "/help",
  //   title: "Help",
  // },
];
