import React from 'react';
import styles from './ShareButton.module.css';


const ShareButton = ({ address }) => {
  const handleShare = () => {
    // Проверка, что мы находимся в Telegram Web App
    if (window.Telegram.WebApp) {
      // С помощью Telegram Web App API отправляем сообщение
      window.Telegram.WebApp.share(`Мой адрес кошелька: ${address}`);
    } else {
      console.log('Эта функция доступна только в Telegram Web App.');
    }
  };

  return (
    <button className={styles.btn} onClick={handleShare}>Поделиться в Telegram</button>
  );
};

export default ShareButton;




