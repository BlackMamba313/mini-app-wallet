import React from 'react';
import Header from "../components/Header";
import QrCode from "../components/QrCode";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";

const ReceivePage = () => {
  const activeWallet = useSelector(walletData)
  return (
    <>
      <Header title={'Получить'}/>
      <CardsSlider/>
      {activeWallet && <QrCode/>}
    </>
  );
};

export default ReceivePage;