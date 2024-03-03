import React from 'react';
import Header from "../components/Header";
import QrCode from "../components/QrCode";
import CardsSlider from "../components/CardsSlider";

const ReceivePage = () => {
  return (
    <>
      <Header title={'Получить'}/>
      <CardsSlider/>
      <QrCode/>
    </>
  );
};

export default ReceivePage;