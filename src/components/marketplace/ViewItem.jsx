import React from "react";
import {
  StyledViewCompo,
  StyledViewImage,
  StyledViewPadding,
} from "../../styles/pages/itemview.styled";
import { HeaderOne, HeaderTwo, Libography } from "../../libs";
import CreatedUser from "./CreatedUser";

const ViewItem = ({ item }) => {
  // const { title } = useParams();
  // const item = itemsdata.find((item) => item.title === title);

  return (
    <StyledViewCompo>
      <StyledViewImage src={item?.image} />
      <StyledViewPadding>
        <HeaderOne
          fontSemiBold
          fontSofia
          text={item?.title}
          className="text-3xl"
        />
        <HeaderTwo
          fontBold
          fontSofia
          text={item?.price.toLocaleString()}
          className="text-2xl"
        />
        <hr />
        <Libography
          fontSemiBold
          fontSofia
          text={item?.desc}
          className="text-lg"
        />
        <hr />
        <CreatedUser item={item} />
      </StyledViewPadding>
    </StyledViewCompo>
  );
};

export default ViewItem;
