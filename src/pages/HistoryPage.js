import React from 'react';
import Header from "../components/Header";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";

const HistoryPage = () => {
  const activeWallet  = useSelector(walletData)
  return (
    <>
      <Header title={'История сделок'} activeWallet={activeWallet}/>
      <CardsSlider/>
      <p>HistoryPage</p>
    </>
  );
};

export default HistoryPage;