import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import {useTelegram} from "../hooks/useTelegram";
import CryptoJS from 'crypto-js';

const MainPage = () => {
  const { initData, initDataUnsafe} = useTelegram();

  const secretKey = "6786196747:AAFqhLcBqjkfV82d0jZXr-HI7OmPL4R7h3w";

  const receivedHash = initDataUnsafe.hash

// Хеширование данных с использованием SHA-256
  const hash = CryptoJS.HmacSHA256(initData, secretKey).toString();



  console.log('>>>>>>>>>>>receivedHash', receivedHash)
  console.log('>>>>>>>>>>>hash', hash)

// Сравнение полученного хеша с ожидаемым
  if (hash === receivedHash) {
    console.log("Хеши совпадают. Аутентификация успешна.");
  } else {
    console.log("Хеши не совпадают. Аутентификация не удалась.");
  }


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