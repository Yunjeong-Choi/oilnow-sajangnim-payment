import { Column, Table } from "react-virtualized";
import * as payDatabase from "../../../database/payDatabase.json";
import { FunctionComponent } from "react";
import styled from "styled-components";
import "react-virtualized/styles.css"; // only needs to be imported once

const TOTAL_WIDTH = 355;
const widths = {
  결제상태: 0.25,
  일자: 0.25,
  고객ID: 0.25,
  금액: 0.25,
  "": 0.25,
};
const dataList = payDatabase.dataList;
const columnName = Object.keys(widths);

const colPainter = (item: string) => {
  // const width = widths.{ item }
  //TODO: item을 여기에 어떻게 사용하지..?
  return (
    <Column key={item} dataKey={item} label={item} width={0.25 * TOTAL_WIDTH} />
  );
};

const PaySearchResultList: FunctionComponent = () => {
  return (
    <Table
      width={TOTAL_WIDTH}
      height={300}
      headerHeight={30}
      rowHeight={30}
      rowCount={dataList.length}
      rowGetter={({ index }) => dataList[index]}
    >
      {columnName.map((item) => colPainter(item))}
    </Table>
  );
};
export default PaySearchResultList;

// styled-componets
