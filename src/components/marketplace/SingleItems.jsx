import React from "react";
import {
  ItemDetails,
  ItemImage,
  SingleWrapper,
} from "../../styles/components/marketplace/singleitem.styled";
import { HeaderOne, HeaderTwo, Libography } from "../../libs";
import { useNavigate } from "react-router-dom";

const SingleItems = ({ item }) => {
  const navigate = useNavigate();
  return (
    <SingleWrapper
      className="shadow shadow-black hover:shadow-lg hover:shadow-black cursor-pointer"
      onClick={() => navigate(item.id /*.replace(/\s+/g)*/)}
    >
      <ItemImage src={item.image} />
      <ItemDetails>
        <HeaderTwo fontSemiBold fontSofia text={item.title} />
        <HeaderOne fontBold fontSofia text={item.price.toLocaleString()} />
        <Libography
          fontSemiBold
          text={item.desc}
          fontSofia
          className="text-neutral-500 text-sm"
        />
      </ItemDetails>
    </SingleWrapper>
  );
};

export default SingleItems;
