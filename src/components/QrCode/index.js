import React, {useEffect, useState} from "react";
import styles from './QrCode.module.css';
import QRCode from "react-qr-code";
import {walletData} from "../../store/auth/selectors";
import {useSelector} from "react-redux";
import ShareButton from "../ShareButton";

const QrCode = () => {
  const [qrValue, setQrValue] = useState('');
  const [amount, setAmount] = useState('');
  const activeWallet = useSelector(walletData)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeWallet?.address);
    } catch (err) {
      console.error('Не удалось скопировать текст: ', err);
    }
  };

  console.log(qrValue)
  useEffect(() => {
    // Обновляем qrValue при изменении активного кошелька или суммы
    setQrValue(JSON.stringify({
      address: activeWallet?.address,
      network: activeWallet?.network,
      token: activeWallet?.token,
      amount: amount // Добавляем amount в объект
    }));
  }, [activeWallet, amount]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={handleCopy}>
        <p className={styles.walletAddress}>{activeWallet?.address}</p>
      </div>
      <p className={styles.text}>Запросить перевод у контакта </p>
      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        placeholder='Введите сумму'
        className={styles.input}
        value={amount}
        onChange={handleAmountChange}/>
      <ShareButton amount={amount} activeWallet={activeWallet}/>
      {amount &&<div className={styles.wrapperQr}>
          < QRCode  bgColor={'#d2d3d5'} size={210} value={qrValue}/>
      </div>}
    </div>
  );
}
export default QrCode;