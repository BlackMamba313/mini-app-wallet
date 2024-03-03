import React from 'react';
import Header from "../components/Header";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";

const CreatePage = () => {
  const activeWallet  = useSelector(walletData)
  return (
    <>
      <Header title={'Создать сделку'} activeWallet={activeWallet}/>
      <CardsSlider/>
      <p>CreatePage</p>
    </>
  );
};

export default CreatePage;