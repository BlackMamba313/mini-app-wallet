import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from "../Card";
import {useSelector} from "react-redux";
import {walletsData} from "../../store/auth/selectors";

const CardsSlider = () => {
  const { wallets } = useSelector(walletsData);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };
  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
      {wallets.map((card) => (
        <Card network={card.network} address={card.address} token={card.token} balance={card.balance}/>
      ))}
    </SwipeableViews>
  );
};

export default CardsSlider;