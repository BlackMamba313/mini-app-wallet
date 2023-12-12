import React from 'react';
import Header from "../components/Header";
import BuyPanel from "../components/BuyPanel";
import CardsSlider from "../components/CardsSlider";

const BuyPage = () => {

  return (
    <>
      <Header title={'Купить'}/>
      <CardsSlider/>
      <BuyPanel/>
    </>
  );
};

export default BuyPage;