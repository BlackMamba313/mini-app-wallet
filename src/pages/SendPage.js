import React from 'react';
import Header from "../components/Header";
import SendPanel from "../components/SendPanel";
import CardsSlider from "../components/CardsSlider";

const SendPage = () => {

  return (
    <>
      <Header title={'Отправить'}/>
      <CardsSlider/>
      <SendPanel/>
    </>
  );
};

export default SendPage;