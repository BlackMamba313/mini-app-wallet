import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import SellPanel from "../components/SellPanel";

const SellPage = () => {

  return (
    <>
      <Header title={'Продать'}/>
      <Card/>
      <SellPanel/>
    </>
  );
};

export default SellPage;