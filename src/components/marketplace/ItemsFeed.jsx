import React, { useState } from "react";
import {
  FeedWrapper,
  ItemFeedWrap,
} from "../../styles/components/marketplace/itemsfeed.styled";
import ItemsFilter from "../filter/ItemsFilter";
import SingleItems from "./SingleItems";
import { HeaderOne } from "../../libs";
import { RxLapTimer } from "react-icons/rx";

const ItemsFeed = () => {
  const [text, setText] = useState("");

  return (
    <FeedWrapper>
      {/* <ItemsFilter text={text} setText={setText} /> */}
      <RxLapTimer className="text-neutral-400" />
      <HeaderOne fontSofia text="Coming soon" className="text-neutral-500" />
      {/* <ItemFeedWrap className="flex flex-wrap gap-3 h-auto mt-40 ml-5">
        {itemsdata
          .filter((item) => {
            const name = item.title.toLowerCase();
            const searchTerm = text.toLowerCase();

            return name.includes(searchTerm) && name !== searchTerm;
          })
          .map((item, index) => (
            <SingleItems item={item} key={index} />
          ))}
      </ItemFeedWrap> */}
    </FeedWrapper>
  );
};

export default ItemsFeed;
