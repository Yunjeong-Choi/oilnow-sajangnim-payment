import { FunctionComponent } from "react";
import styled from "styled-components";

const H2Title: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <TitleBox>
      <TitleText>{children}</TitleText>
    </TitleBox>
  );
};

export default H2Title;

//styled-components
const TitleBox = styled.div`
  display: flex;
  justify-content: left;
`;

const TitleText = styled.h2`
  font-weight: 500;
`;
