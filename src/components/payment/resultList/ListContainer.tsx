import styled from "styled-components";
import { List } from "react-virtualized";
import * as payDatabase from "../../../database/payDatabase.json";
import ListItem from "./ListItem";
import { FunctionComponent } from "react";

//TODO: infinite scroll 직접 구현해보기
//infinite scroll 원리를 알고나서 연결해봐야겠다.

//Creating an infinite-loading list 이거랑 지난 예제와의 차이점은?
//https://www.npmjs.com/package/react-virtualized

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
      <ListItem index={index} />
    </div>
  );
};

const ListContainer = () => {
  const dataList = payDatabase.dataList;

  return (
    <List
      width={350}
      height={400}
      rowCount={dataList.length}
      rowHeight={({ index }) => {
        // return index === fetch.openedIndex ? 95 : 45;
        // return index === 0 ? 95 : 45;
        return 45;
      }}
      rowRenderer={rowRenderer}
    />
  );
};

export default ListContainer;

//styled-components
// const ContainerBox = styled.div`
//   font-size: 14px;
//   padding-top: 8px;
// `;
