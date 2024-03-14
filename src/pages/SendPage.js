import React, {useState} from 'react';
import Header from "../components/Header";
import SendPanel from "../components/SendPanel";
import CardsSlider from "../components/CardsSlider";

const SendPage = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  return (
    <>
      <Header title={'Отправить'}/>
      {isScannerOpen && <CardsSlider/>}
      <SendPanel
        isScannerOpen={isScannerOpen}
        setIsScannerOpen={setIsScannerOpen}
      />
    </>
  );
};

export default SendPage;