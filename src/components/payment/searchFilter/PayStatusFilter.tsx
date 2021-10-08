import styled from "styled-components";
import { RoundSquareButton } from "../../common/Buttons";

const payStatusList = ["결제완료", "취소요청", "취소완료"];

const PayStatusFilter = () => {
  return (
    <PayStatusBox>
      {payStatusList.map((status) => (
        <PayStatus key={status}>{status}</PayStatus>
      ))}
    </PayStatusBox>
  );
};

export default PayStatusFilter;

//styled-components
const PayStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const PayStatus = styled(RoundSquareButton)`
  height: 30px;
  width: 30%;

  font-size: 14px;
`;
//width 고정값은 80px
