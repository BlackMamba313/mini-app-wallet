import React from 'react';
import Header from "../components/Header";
import SellPanel from "../components/SellPanel";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";

const SellPage = () => {
  const activeWallet  = useSelector(walletData)
  return (
    <>
      <Header title={'Продать'} activeWallet={activeWallet}/>
      <CardsSlider/>
      <SellPanel/>
    </>
  );
};

export default SellPage;