import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import {useTelegram} from "../hooks/useTelegram";

const MainPage = () => {
  const {tg} = useTelegram();

  console.log('>>>>>>>>>>>', tg)
  return (
    <>
      {/*{!loading && !error && (*/}
        <>
          <Header/>
          <CardsSlider />
          <ControlButtons/>
        </>
      {/*)}*/}
    </>
  );
};

export default MainPage;