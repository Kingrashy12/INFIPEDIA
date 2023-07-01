import React, { useMemo } from "react";
import {
  RulesTextContainer,
  StyledRulesImage,
  StyledRulesItemContainer,
} from "../../styles/components/form/rulesinput.styled";
import { FlexBox } from "../../styles/layout/navimage.styled";
import { Libography } from "../../libs";
import { formatDistanceToNowStrict } from "date-fns";

const RulesItem = ({ r }) => {
  const created = useMemo(() => {
    if (!r.Newrule?.created) {
      return null;
    }

    return formatDistanceToNowStrict(r.Newrule?.created);
  }, [r.Newrule?.created]);
  return (
    <StyledRulesItemContainer>
      {r.owner?.map((user, index) => (
        <>
          <FlexBox className="items-center mb-2" key={index}>
            <StyledRulesImage src={user.uProfile} />

            <Libography fontSemiBold fontSofia text={user.name} />

            <Libography
              fontSemiBold
              fontSofia
              text={created}
              className="text-neutral-400"
            />
          </FlexBox>
          <hr />
        </>
      ))}
      <RulesTextContainer>
        <Libography fontSemiBold fontSofia text={r.Newrule?.text} />
      </RulesTextContainer>
    </StyledRulesItemContainer>
  );
};

export default RulesItem;
