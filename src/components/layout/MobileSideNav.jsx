import React from "react";
import {
  FlexBox,
  MobileNavWrapper,
  StyledMobileNav,
  StyledNavImage,
} from "../../styles/layout/navimage.styled";

import { HeaderTwo, Libography, MobileNavImage } from "../../libs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobilenavdata, mobilenavdataI } from "../../data/mobilenav";
import { getNotification } from "../../hooks/getUserById";
import { PlaceholderImage } from "../../asset";
import { BiLogIn } from "react-icons/bi";
import { logOutUser } from "../../store/authSlice";

const MobileSideNav = ({ setOpennav }) => {
  const auth = useSelector((state) => state.credentails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledMobileNav className="shadow shadow-black">
      <FlexBox>
        {/* <StyledNavImage src={Male} onClick={() => setOpennav(false)} /> */}
        {auth?._id ? (
          <MobileNavImage user={auth} onClick={() => setOpennav(false)} />
        ) : (
          <MobileNavImage
            user={PlaceholderImage}
            onClick={() => setOpennav(false)}
          />
        )}
        <HeaderTwo
          fontSemiBold
          fontSofia
          text={auth?._id ? `${auth.name}` : "Login"}
        />
      </FlexBox>
      <MobileNavWrapper>
        {mobilenavdata.map((item, index) => (
          <Link
            to={
              item.isProfile && !auth._id
                ? "auth/login"
                : item.isUser
                ? item.isProfile
                  ? `/${auth?.username}`
                  : item.link
                : item.link
            }
            key={index}
            onClick={() => setOpennav(false)}
          >
            <FlexBox
              onClick={() =>
                navigate(item.isProfile && !auth._id ? "/auth/login" : null)
              }
            >
              <>{item.icon}</>
              <Libography
                fontSemiBold
                fontSofia
                text={item.isProfile && !auth._id ? "Login" : item.label}
              />
            </FlexBox>
          </Link>
        ))}
        <hr />
        {mobilenavdataI.map((item, index) => (
          <Link
            to={!auth._id ? "/auth/login" : item.link}
            key={index}
            onClick={() => setOpennav(false)}
          >
            <FlexBox>
              <>{item.icon}</>
              <Libography fontSemiBold fontSofia text={item.label} />
            </FlexBox>
          </Link>
        ))}
        {auth?._id ? (
          <FlexBox
            onClick={() => {
              dispatch(logOutUser());
              setOpennav(false);
            }}
          >
            <BiLogIn size={25} />
            <Libography fontSemiBold fontSofia text="Logout" />
          </FlexBox>
        ) : (
          ""
        )}
      </MobileNavWrapper>
    </StyledMobileNav>
  );
};

export default MobileSideNav;
