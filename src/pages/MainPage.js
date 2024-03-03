import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import {useSelector} from "react-redux";
import {walletData} from "../store/auth/selectors";


const MainPage = () => {
  const activeWallet  = useSelector(walletData)
  return (
    <>
      {/*{!loading && !error && (*/}
        <>
          <Header activeWallet={activeWallet}/>
          <CardsSlider/>
          <ControlButtons/>
        </>
      {/*)}*/}
    </>
  );
};

export default MainPage;