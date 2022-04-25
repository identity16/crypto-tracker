import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const CoinTitle = styled.h1`
  color: rgb(135, 111, 250);
  font-size: 48px;
  text-align: center;
  padding: 1em 0;
`;

const Content = styled.section``;

interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams();
  const state = useLocation().state as RouteState;

  return (
    <Container>
      <CoinTitle>{state?.name || 'Loading...'}</CoinTitle>
      <Content>{coinId}</Content>
    </Container>
  );
}

export default Coin;
