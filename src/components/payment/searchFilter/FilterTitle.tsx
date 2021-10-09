import { FunctionComponent } from "react";
import styled from "styled-components";

const FilterTitle: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <TitleBox>
      <TitleText>{children}</TitleText>
    </TitleBox>
  );
};

export default FilterTitle;

//styled-components
const TitleBox = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  font-weight: 500;
`;
