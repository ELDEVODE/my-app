import Filter from './Components/Filter';
import styled from 'styled-components';
import Card from './Components/Card';
import CardList from './Components/CardList';

function Home() {
  return (
    <>
      <Filter />
      <Edvora>Edvora</Edvora>
      <Products>Products</Products>
      <ProductName>Product Name</ProductName>
      <Line></Line>
      <Card />
      {/* <CardList /> */}
    </>
  );
}

export default Home;

const Edvora = styled.div`
  position: absolute;
  width: 111px;
  height: 42px;
  left: 303px;
  top: 43px;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;
  color: rgba(255, 255, 255, 0.87);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Products = styled.div`
  position: absolute;
  width: 97px;
  height: 30px;
  left: 303px;
  top: 106px;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ProductName = styled.div`
  position: absolute;
  width: 160px;
  height: 31px;
  left: 305px;
  top: 157px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;

const Line = styled.div`
  position: absolute;
  width: 970px;
  height: 1px;
  left: 303px;
  top: 192px;
  background-color: rgba(203, 203, 203, 0.255);
`;
