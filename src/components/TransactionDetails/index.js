import React from 'react';
import styles from './TransactionDetails.module.css';
import {useNavigate} from "react-router-dom";

const TransactionDetails = ({transaction}) => {
  const navigate = useNavigate();
  const clickSafe = (e) => {
    e.stopPropagation();
    console.log('clickLeftBTN')
  }

  const clickSend = (e) => {
    e.stopPropagation();
    navigate(`/send?address=${transaction.acc}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardRow}>
        <div>
          id {transaction.id}
        </div>
        <div>
          {transaction.acc}
        </div>
      </div>
      <div className={styles.buttons}>
        <div onClick={clickSafe} className={styles.buttonL} >
          Сохранить
        </div>
        <div onClick={clickSend} className={styles.buttonR}>
          Отправить
        </div>
      </div>

    </div>
  );
};

export default TransactionDetails;



