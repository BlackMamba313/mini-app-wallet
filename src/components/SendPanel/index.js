import React from "react";
import styles from './SendPanel.module.css';

const SendPanel = () => {

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Выберите контракт</p>
      <input
        type="text"
        placeholder='Выберите контакт'
        className={styles.input}/>
      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        placeholder='Введите сумму'
        className={styles.input}/>
      <p className={styles.text}>Отправить по QR</p>
      <div className={styles.QrBtn}>QR</div>
    </div>
  );
}
export default SendPanel;