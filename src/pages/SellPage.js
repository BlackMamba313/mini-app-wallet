import React from 'react';
import Header from "../components/Header";
import SellPanel from "../components/SellPanel";
import CardsSlider from "../components/CardsSlider";

const SellPage = () => {

  return (
    <>
      <Header title={'Продать'}/>
      <CardsSlider/>
      <SellPanel/>
    </>
  );
};

export default SellPage;