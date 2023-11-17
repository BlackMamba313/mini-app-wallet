import React from 'react';
import './ControlButtons.css';

const ControlButtons = () => {

  return (
    <div className='wrapper'>
      <div className='buttonWrapper'>
        <div className="buttonHalf button">
          Получить
        </div>
        <div className="buttonHalf button">
          Купить
        </div>
        <div className="buttonHalf button">
          Отправить
        </div>
        <div className="buttonHalf button">
          Продать
        </div>
        <div className='button'>
          Создать сделку
        </div>
        <div className='button'>
          Сделки
        </div>
      </div>
    </div>
  );
};

export default ControlButtons;