import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from "../Card";
import {useSelector} from "react-redux";
import {userData} from "../../store/auth/selectors";

const CardsSlider = () => {
  const { wallets = [] } = useSelector(userData);
  const cardData = wallets.flatMap(wallet =>
    wallet.balances.map(balance => ({
      network: wallet.network,
      address: wallet.address,
      token: balance.token,
      balance: balance.balance,
    }))
  );
  console.log(cardData)


  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };
  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
      {cardData.map((card) => (
        <Card network={card.network} address={card.address} token={card.token} balance={card.balance}/>
      ))}
    </SwipeableViews>
  );
};

export default CardsSlider;