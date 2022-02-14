import styled from 'styled-components';

function DropDownThree({content}) {
  return (
    <Container>
      <Text>{content}</Text>
      <Button>
        <i class='fa-solid fa-caret-down'></i>
      </Button>
    </Container>
  );
}

export default DropDownThree;

const Container = styled.div`
  position: absolute;
  width: 168.45px;
  height: 37.5px;
  top: 195px;
  left: 25px;
  right: 34.55px;
  background: #232323;
  border-radius: 4.68775px;
  color: white;
`;

const Text = styled.div`
  position: absolute;
  width: 144px;
  height: 22px;
  left: 13px;
  top: 8px;
  right: 11.45px;
  font-family: 'SF Pro Display', sans-serif;
`;

const Button = styled.div`
  position: absolute;
  width: 12.19px;
  height: 12.19px;
  left: 145px;
  top: 8px;
  color: #a5a5a5;
`;
