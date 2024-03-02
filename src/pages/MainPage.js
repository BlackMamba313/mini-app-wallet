import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {userData} from "../store/auth/selectors";


const MainPage = () => {
  const {wallets} = useSelector(userData);

  return (
    <>
      {/*{!loading && !error && (*/}
        <>
          <Header/>
          {wallets &&
            <CardsSlider/>}
          <ControlButtons/>
        </>
      {/*)}*/}
    </>
  );
};

export default MainPage;