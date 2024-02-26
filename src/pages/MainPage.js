import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";


const MainPage = () => {


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