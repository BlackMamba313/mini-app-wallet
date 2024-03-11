import React from 'react';
import styles from './ShareButton.module.css';

const ShareButton = ({ address }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Поделиться адресом',
          text: `Мой адрес кошелька: ${address}`,
          url: document.location.href, // Это пример, замените на URL, который хотите поделиться
        });
      } catch (error) {
        console.error('Произошла ошибка при попытке поделиться: ', error);
      }
    } else {
      // Альтернативная логика для браузеров, не поддерживающих Web Share API
      console.log('Web Share API не поддерживается в этом браузере.');
    }
  };

  return (
    <button className={styles.bnt} onClick={handleShare}>Поделиться</button>
  );
};

export default ShareButton



