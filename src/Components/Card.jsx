import styled from 'styled-components';

function Card() {
  return (
    <Container>
      <Image></Image>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  position: absolute;
  width: 210px;
  height: 150px;
  left: 309px;
  top: 225px;
  background: #232323;
  border-radius: 4.68775px;
`;

const Image = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 12px;
  top: 10px;
  background: #232323;
  border-radius: 4.68775px;
  background: url('https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png');
`;
