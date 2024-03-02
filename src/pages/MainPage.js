import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {userData} from "../store/auth/selectors";


const MainPage = () => {

  return (
    <>
      {/*{!loading && !error && (*/}
        <>
          <Header/>
          <CardsSlider/>
          <ControlButtons/>
        </>
      {/*)}*/}
    </>
  );
};

export default MainPage;