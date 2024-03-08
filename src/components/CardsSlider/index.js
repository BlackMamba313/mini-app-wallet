import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from "../Card";
import {useDispatch, useSelector} from "react-redux";
import {walletsData} from "../../store/auth/selectors";
import { setActiveWallet } from "../../store/currency";

const CardsSlider = () => {
  const dispatch = useDispatch();
  const wallets  = useSelector(walletsData);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
    dispatch(setActiveWallet(wallets[index]))
  };
  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>

      {wallets && wallets.map((card) => (
        <Card key={card.token} network={card.network} address={card.address} token={card.token} balance={card.balance}/>
      ))}
    </SwipeableViews>
  );
};

export default CardsSlider;