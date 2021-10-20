import styled from "styled-components";

const UserIDFilter = () => {
  return (
    <UserIDInput type="text" placeholder="고객ID를 입력해주세요."></UserIDInput>
  );
};

export default UserIDFilter;

//styled-components
const UserIDInput = styled.input`
  height: 30px;
  width: 100%;
  border: 0.7px solid var(--gray);
  box-sizing: border-box;
  border-radius: 4px;

  padding: 10px;
  margin-right: 10px;
`;

//TODO: enter하면 왜 submit이 안돼지
