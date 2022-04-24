import { Link } from 'react-router-dom';
import styled from 'styled-components';

const coins = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
];

const Container = styled.div``;

const Header = styled.h1`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
`;

const CoinList = styled.ul`
  padding: 24px;
`;

const Coin = styled.li`
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  margin-bottom: 12px;
  border-radius: 12px;

  a {
    text-decoration: none;
    display: block;
    padding: 20px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: red;
    }
  }
`;

function Coins() {
  return (
    <Container>
      <Header>COINS</Header>
      <CoinList>
        {coins.map(coin => (
          <Coin key={coin.id}>
            <Link to={coin.id}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
