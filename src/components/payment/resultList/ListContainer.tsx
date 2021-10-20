import { List } from "react-virtualized";
import * as payDatabase from "../../../database/payDatabase.json";
import ListItem from "./listItem";
import { FunctionComponent } from "react";
import styled from "styled-components";

//TODO: infinite scroll 직접 구현해보기
//infinite scroll 원리를 알고나서 연결해봐야겠다.

//Creating an infinite-loading list 이거랑 지난 예제와의 차이점은?
//https://www.npmjs.com/package/react-virtualized

const dataList = payDatabase.dataList;

interface RowRendererProps {
  key: string;
  style?: any;
  index: number;
}

const rowRenderer: FunctionComponent<RowRendererProps> = ({
  key, // Unique key within array of rows
  index, // Index of row within collection
  style, // Style object to be applied to row (to position it)
}) => {
  return (
    <div key={key} style={style}>
      <ListItem curIndex={index} />
    </div>
  );
};

const ListContainer = () => {
  // const openRowIndex = useAppSelector((state: RootState) => state.pay.openRowIndex)
  return (
    <ListBox>
      <List
        width={350}
        height={400}
        rowCount={dataList.length}
        rowHeight={45}
        rowRenderer={rowRenderer}
      />
    </ListBox>
  );
};

export default ListContainer;

//styled-components
const ListBox = styled.div`
  padding-top: 5px;
`;

// const ContainerBox = styled.div`
//   font-size: 14px;
//   padding-top: 8px;
// `;
