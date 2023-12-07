import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import QrCode from "../components/QrCode";

const ReceivePage = () => {

  return (
    <>
      <Header title={'Получить'}/>
      <Card/>
      <QrCode/>
    </>
  );
};

export default ReceivePage;