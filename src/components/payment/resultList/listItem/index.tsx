import { FunctionComponent } from "react";
import styled from "styled-components";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import { useAppSelector } from "../../../../hooks/useStore";

interface ListItemProps {
  curIndex: number;
}

const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const { curIndex } = props;
  const { isDetailOpen, openedRowIndex } = useAppSelector((state) => state.pay);

  return (
    <ItemBox>
      <BasicInfo curIndex={curIndex} />
      {isDetailOpen && openedRowIndex === curIndex && (
        <DetailInfo curIndex={curIndex} />
      )}
    </ItemBox>
  );
};

export default ListItem;

//styled-components

const ItemBox = styled.div`
  font-size: 14px;

  display: flex;
  flex-direction: column;
`;
