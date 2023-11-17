import React from 'react';
import './Header.css';

const Header = () => {
  const moskData = {
    cost: 'По курсу за 1 BTC 4 642 440.01₽',
  }

  return (
    <div className='cost'>
      {moskData.cost}
    </div>
  );
};

export default Header;