import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from "../Card";
import {useDispatch, useSelector} from "react-redux";
import {walletData, walletsData} from "../../store/auth/selectors";
import { setActiveWallet } from "../../store/auth";

const CardsSlider = () => {
  const dispatch = useDispatch();
  const wallets  = useSelector(walletsData);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const activeWallet  = useSelector(walletData)
  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
    dispatch(setActiveWallet(wallets[index]))
    console.log('activeWallet>>>>>>>>>', activeWallet)
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