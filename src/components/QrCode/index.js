import React, {useState} from "react";
import styles from './QrCode.module.css';
import QRCode from "react-qr-code";

const QrCode = () => {
  const [qrValue, setQrValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.borderQr}>
        <div className={styles.wrapperQr}>
          <QRCode size={210} value={qrValue}/>
        </div>
      </div>
      <p className={styles.walletAddress}>0x22aBb2d0e8A52eF99B8C095EFdC709176574AA82</p>
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
      placeholder='Введите сумму'
        className={styles.input}/>
    </div>
  );
}
export default QrCode;