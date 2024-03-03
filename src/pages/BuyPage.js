import React from 'react';
import Header from "../components/Header";
import BuyPanel from "../components/BuyPanel";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";

const BuyPage = () => {
  const activeWallet  = useSelector(walletData)
  return (
    <>
      <Header title={'Купить'} activeWallet={activeWallet}/>
      <CardsSlider/>
      <BuyPanel/>
    </>
  );
};

export default BuyPage;