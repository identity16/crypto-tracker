import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

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

const Loader = styled.p`
  text-align: center;
`;

function Coins() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  });

  return (
    <Container>
      <Header>COINS</Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map(coin => (
            <Coin key={coin.id}>
              <Link to={coin.id} state={{ name: coin.name }}>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
