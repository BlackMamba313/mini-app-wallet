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


  useEffect(() => {
    setQrValue(activeWallet?.address)
  }, [activeWallet]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperQr}>
        <QRCode bgColor={'#1f2226'} size={210} value={qrValue}/>
      </div>
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
    </div>
  );
}
export default QrCode;