import React from 'react';
import Header from "../components/Header";
import CardsSlider from "../components/CardsSlider";

const HistoryPage = () => {
  return (
    <>
      <Header title={'История сделок'}/>
      <CardsSlider/>
      <p>HistoryPage</p>
    </>
  );
};

export default HistoryPage;