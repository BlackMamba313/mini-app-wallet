import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { walletsData } from "../../store/auth/selectors";
import { setActiveWallet } from "../../store/auth";

const EnhancedSwipeableViews = bindKeyboard(SwipeableViews);

const CardsSlider = () => {
  const dispatch = useDispatch();
  const wallets = useSelector(walletsData);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
    dispatch(setActiveWallet(wallets[index]));
  };

  return (
    <EnhancedSwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
      {wallets && wallets.map((card, index) => (
        <Card key={index} network={card.network} address={card.address} token={card.token} balance={card.balance} />
      ))}
    </EnhancedSwipeableViews>
  );
};

export default CardsSlider;
