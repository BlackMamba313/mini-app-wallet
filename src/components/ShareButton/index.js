import React from 'react';
import styles from './ShareButton.module.css';

const ShareButton = ({ address }) => {
  const handleShare = async () => {
      // Создаем ссылку для отправки сообщения в Telegram
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(document.location.href)}&text=${encodeURIComponent(`Мой адрес кошелька: ${address}`)}`;
      window.open(telegramUrl, '_blank');
  };

  return (
    <button className={styles.btn} onClick={handleShare}>Поделиться</button>
  );
};

export default ShareButton;




