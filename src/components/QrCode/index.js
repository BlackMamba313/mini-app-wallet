import React, {useEffect, useState} from "react";
import styles from './QrCode.module.css';
import QRCode from "react-qr-code";
import {walletData} from "../../store/auth/selectors";
import {useSelector} from "react-redux";

const QrCode = () => {
  const [qrValue, setQrValue] = useState('');
  const activeWallet  = useSelector(walletData)
  useEffect(() => {
    setQrValue(activeWallet.address)
  }, [activeWallet]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.borderQr}>
        <div className={styles.wrapperQr}>
          <QRCode size={210} value={qrValue}/>
        </div>
      </div>
      <p className={styles.walletAddress}>{activeWallet.address}</p>
      <div className={styles.copyBtns}>
        <div>
          <p className={styles.btnText}>Скопировать адрес</p>
        </div>
        <div>
          <p className={styles.btnText}>Поделиться</p>
        </div>
      </div>
      <p className={styles.text}>Запросить перевод у контакта </p>
      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        placeholder='Введите сумму'
        className={styles.input}/>
    </div>
  );
}
export default QrCode;