import React from 'react';
import Header from "../components/Header";
import SendPanel from "../components/SendPanel";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";

const SendPage = () => {
  const activeWallet  = useSelector(walletData)
  return (
    <>
      <Header title={'Отправить'} activeWallet={activeWallet}/>
      <CardsSlider/>
      <SendPanel/>
    </>
  );
};

export default SendPage;