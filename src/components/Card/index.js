import React from 'react';
import './Card.css';
import {useTelegram} from "../../hooks/useTelegram";
import SecurityIcon from "../../assets/SecurityIcon";
import AccountIcon from "../../assets/AccountIcon";

const Card = () => {
  const {user} = useTelegram();

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='cardHeader'>
          <p className='cardTitle'>Ваш баланс</p>
          <p className='cardTitle'>BTC/RUB</p>
        </div>
        <p className='mainBalance'>0.1230</p>
        <p className='subBalance'>542441.01₽</p>
        <p className='walletNumber'>0x22aBb2d0e8A52eF99B8C095EFdC709176574AA82</p>
        <p className='userName'>Ваше имя пользователя:
          {user?.username}
        </p>
        <div className='cardFooter'>
          <div className='cardFooterBox'>
            <AccountIcon/>
            <p className='cardId'>ID 098311</p>
          </div>
          <div className='cardFooterBox'>
            <SecurityIcon/>
            <p className='cardStatus'>Не проверено!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;