import React from 'react';
import styles from './ShareButton.module.css';

const ShareButton = ({ address }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Поделиться адресом',
          text: `Мой адрес кошелька: ${address}`,
          // url: document.location.href, // Можно опустить, если хотите поделиться только текстом
        });
        console.log('Содержимое успешно поделено.');
      } catch (error) {
        console.error('Произошла ошибка при попытке поделиться: ', error);
      }
    } else {
      // Создаем ссылку для отправки сообщения в Telegram
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(document.location.href)}&text=${encodeURIComponent(`Мой адрес кошелька: ${address}`)}`;
      window.open(telegramUrl, '_blank');
    }
  };

  return (
    <button className={styles.btn} onClick={handleShare}>Поделиться</button>
  );
};

export default ShareButton;




