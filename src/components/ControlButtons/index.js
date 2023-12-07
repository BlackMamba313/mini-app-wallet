import React from 'react';
import styles from './ControlButtons.module.css';
import {useNavigate} from "react-router-dom";

const ControlButtons = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper}>
        <div onClick={()=>navigate(`/receive`)} className={`${styles.buttonHalf} ${styles.button}`}>
          Получить
        </div>
        <div onClick={()=>navigate(`/buy`)} className={`${styles.buttonHalf} ${styles.button}`}>
          Купить
        </div>
        <div onClick={()=>navigate(`/send`)} className={`${styles.buttonHalf} ${styles.button}`}>
          Отправить
        </div>
        <div onClick={()=>navigate(`/sell`)} className={`${styles.buttonHalf} ${styles.button}`}>
          Продать
        </div>
        <div onClick={()=>navigate(`/create`)} className={styles.button}>
          Создать сделку
        </div>
        <div onClick={()=>navigate(`/history`)} className={styles.button}>
          Сделки
        </div>
      </div>
    </div>
  );
};

export default ControlButtons;