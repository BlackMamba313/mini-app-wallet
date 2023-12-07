import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import SendPanel from "../components/SendPanel";

const SendPage = () => {

  return (
    <>
      <Header title={'Отправить'}/>
      <Card/>
      <SendPanel/>
    </>
  );
};

export default SendPage;