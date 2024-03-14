import React, {useState} from 'react';
import styles from './TransferConfirmation.module.css';
import SliderButton from "../SliderButton";

const TransferConfirmation = ({ transferData }) => {
  const [isSend, setIsSend] = useState(false);
  const onConfirm = () => {

  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p className={styles.text}>Детали перевода:</p>
        <p>Итого перевод будет стоить: {Number(transferData.payload.commision) + Number(transferData.meta.arg.amount)}</p>
        <p>Адрес перевода: </p>
        <p>{transferData.meta.arg.address}</p>
      </div>
      <SliderButton isSend={isSend} onConfirm={onConfirm}/>
    </div>
  );
};

export default TransferConfirmation;
