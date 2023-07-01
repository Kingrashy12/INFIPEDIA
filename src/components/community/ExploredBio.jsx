import React from "react";
import { StyledExploredBio } from "../../styles/components/community/explored.styled";
import { Button, HeaderOne, Image, Libography, Span } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";
import { Male } from "../../asset";

const ExploredBio = ({ data, isLoading }) => {
  const memeber = 134789;
  const user = {
    name: data.uname,
    username: data.uUsername,
  };
  return (
    <StyledExploredBio>
      <FlexBetween>
        <HeaderOne
          fontSemiBold
          fontSofia
          text={data.cname}
          isLoading={isLoading}
          loadingHeight="40px"
          loadingWidth="200px"
        />
        <Button
          text="Join"
          isCurrentBg
          componentsLoading={isLoading}
          loadingHeight={"50px"}
          loadingWidth={"80px"}
        />
      </FlexBetween>
      <Libography
        fontSemiBold
        fontSofia
        text={data?.cdesc}
        className="text-neutral-500 text-base"
        isLoading={isLoading}
        loadingHeight={"40px"}
        loadingWidth={"400px"}
      />
      <div className="flex gap-3 flex-wrap">
        <Libography
          fontSemiBold
          fontSofia
          text="Organised: May 2023"
          className="text-sm text-neutral-500"
          isLoading={isLoading}
          loadingHeight={"30px"}
          loadingWidth={"90px"}
        />
        <Libography
          fontSemiBold
          fontSofia
          text={`Members: ${memeber.toLocaleString()}`}
          className="text-sm text-neutral-500"
          isLoading={isLoading}
          loadingHeight={"30px"}
          loadingWidth={"90px"}
        />
      </div>
      <Libography
        fontSemiBold
        fontSofia
        text="Owned by:"
        className="text-xs text-neutral-400"
        isLoading={isLoading}
        loadingHeight={"20px"}
        loadingWidth={"70px"}
      />
      <div className="flex gap-2 items-center">
        <Image
          src={data?.uProfile || Male}
          className="w-16 h-16 rounded-full border border-black"
          isLoading={isLoading}
          loadingHeight={"4rem"}
          loadingWidth={"4rem"}
        />
        <div className="flex flex-col">
          <Libography
            fontSemiBold
            fontSofia
            text={data.uname}
            isLoading={isLoading}
            loadingWidth={"150px"}
            loadingHeight={"35px"}
          />
          <Libography
            fontSemiBold
            fontSofia
            text={`@ ${data.uUsername}`}
            className="text-sm text-neutral-500"
            isLoading={isLoading}
            loadingHeight={"30px"}
            loadingWidth={"90px"}
          />
        </div>
      </div>
      <hr />
    </StyledExploredBio>
  );
};

export default ExploredBio;
