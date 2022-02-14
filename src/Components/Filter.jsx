import styled from 'styled-components';
import DropDown from './DropDown';
import DropDownThree from './DropDownThree';
import DropDownTwo from './DropDownTwo';

function Filter() {
  return (
    <Container>
      <Text>Filters</Text>
      <Line></Line>
      <DropDown content='Products' />
      <DropDownTwo content='State' />
      <DropDownThree content='City' />
    </Container>
  );
}

export default Filter;

const Container = styled.div`
  position: absolute;
  background-color: #131313;
  width: 228px;
  height: 275px;
  top: 41px;
  left: 43px;
  border-radius: 15px;
`;

const Text = styled.div`
  position: absolute;
  left: 30px;
  right: 149px;
  top: 24px;
  bottom: 88.15%;
  color: #a5a5a5;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

const Line = styled.div`
  position: absolute;
  width: 158px;
  height: 1px;
  left: 30px;
  top: 59px;
  background-color: #cbcbcb7d;
`;
