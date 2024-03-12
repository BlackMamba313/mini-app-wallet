import React from 'react';
import styles from './ShareButton.module.css';

const ShareButton = ({ amount, activeWallet }) => {
  console.log(activeWallet)
  const handleShare = async () => {
      // Создаем ссылку для отправки сообщения в Telegram
      const telegramUrl =
        `https://t.me/share/url?url=${encodeURIComponent("t.me/LikeWalletPay_bot/LikePayWallet")}&text=${encodeURIComponent(
          `Мой адрес кошелька: ${activeWallet.address}.
           Запрошенная сумма: ${amount} ${activeWallet.token} в сети ${activeWallet.network}`)}`;
      window.open(telegramUrl, '_blank');
  };

  return (
    <button className={styles.bnt} onClick={handleShare}></button>
  );
};

export default ShareButton;




