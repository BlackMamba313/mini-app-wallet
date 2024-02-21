import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from "../Card";

const CardsSlider = () => {
  const cardData = [
    { id: '098311', currency: 'BTC/RUB', walletNumber: '0x22aBb2d0e8A52eF99B8C095EFdC709176574AA82' },
    { id: '093641', currency: 'TOR/RUB', walletNumber: '0x22aBb2d0e8A52eF99B8C095EFdC709176574AA82' },
    { id: '074859', currency: 'DOG/RUB', walletNumber: '0x22aBb2d0e8A52eF99B8C095EFdC709176574AA82' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };
  return (
    <SwipeableViews style={{ width: '80%'}} index={currentIndex} onChangeIndex={handleChangeIndex}>
      {cardData.map((card) => (
        <Card id={card.id} currency={card.currency} walletNumber={card.walletNumber}/>
      ))}
    </SwipeableViews>
  );
};

export default CardsSlider;