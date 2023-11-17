import React from 'react';
import './ControlButtons.css';
import {useNavigate} from "react-router-dom";

const ControlButtons = () => {
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className='buttonWrapper'>
        <div onClick={()=>navigate(`/receive`)} className="buttonHalf button">
          Получить
        </div>
        <div onClick={()=>navigate(`/buy`)} className="buttonHalf button">
          Купить
        </div>
        <div onClick={()=>navigate(`/send`)} className="buttonHalf button">
          Отправить
        </div>
        <div onClick={()=>navigate(`/sell`)} className="buttonHalf button">
          Продать
        </div>
        <div onClick={()=>navigate(`/create`)} className='button'>
          Создать сделку
        </div>
        <div onClick={()=>navigate(`/history`)} className='button'>
          Сделки
        </div>
      </div>
    </div>
  );
};

export default ControlButtons;