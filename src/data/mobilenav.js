import { BsFire, BsPeopleFill } from "react-icons/bs";
import { MdLocalGroceryStore, MdVideoLibrary } from "react-icons/md";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { RiCommunityLine } from "react-icons/ri";

export const mobilenavdata = [
  {
    icon: <FaUserCircle size={25} className="icons" />,
    label: "Account",
    isUser: true,
    isProfile: true,
  },
  {
    icon: <BsPeopleFill size={25} className="icons" />,
    label: "People",
    link: "/users",
  },
  {
    icon: <MdVideoLibrary size={25} className="icons" />,
    label: "Videos",
    link: "/videos",
  },
  {
    icon: <FaBookmark className="icons" size={25} />,
    label: "Saved",
    link: "/saved",
  },
  {
    icon: <RiCommunityLine size={25} className="icons" />,
    label: "Community",
    link: "/community",
  },
  {
    icon: <MdLocalGroceryStore size={25} className="icons" />,
    label: "Store",
    link: "/store",
  },
  {
    icon: <BsFire className="icons" size={25} />,
    label: "Trending",
    link: "/trending",
  },
];

export const mobilenavdataI = [
  {
    icon: <AiOutlineSetting size={25} />,
    link: "/setting",
    label: "Setting",
  },
  // {
  //   icon: <FiHelpCircle size={25} />,
  //   link: "/help",
  //   label: "Help",
  // },
];
