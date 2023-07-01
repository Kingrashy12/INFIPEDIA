import { AiOutlineUser } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const settingdata = [
  {
    label: "Your account",
    link: "/setting/account",
  },
  {
    label: "Security and account access",
    link: "/setting/security_and_account_access",
  },
  {
    label: "Privacy and safty",
    link: "/setting/privacy_and_safty",
  },
  {
    label: "Notification",
    link: "",
    // link: "/setting/notification",
  },
];

export const accountdata = [
  {
    label: "Account information",
    icon: <AiOutlineUser />,
    link: "/setting/account/your_information",
  },
  {
    label: "Change your password",
    icon: <RiLockPasswordLine />,
    link: "/setting/account/password",
  },
  {
    label: "Account information",
    icon: <AiOutlineUser />,
    link: "/setting/account/your_information",
  },
  {
    label: "Deactivate your account",
    icon: <CgDanger className="text-red-600" />,
    link: "/setting/account/deactivate",
  },
];

export const securitydata = [
  {
    label: "Security",
    icon: <MdSecurity />,
    link: "",
    // link: "/setting/security_and_account_access/security",
  },
  {
    label: "App and sessions",
    icon: <BsAppIndicator />,
    link: "",
    // link: "/setting/security_and_account_access/app_session",
  },
];

export const privacydata = [
  {
    label: "Content you can see",
    icon: <MdSecurity />,
    link: "",
  },
];
