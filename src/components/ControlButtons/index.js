import React from 'react';
import styles from './ControlButtons.module.css';
import {useNavigate} from "react-router-dom";

const ControlButtons = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper}>
        <div onClick={() => navigate(`/receive`)} className={`${styles.buttonHalf} ${styles.button}`}>
          <div className={styles.buttonBg}>
            Получить
          </div>
        </div>
        <div onClick={() => navigate(`/buy`)} className={`${styles.buttonHalf} ${styles.button}`}>
          <div className={styles.buttonBg}>
            Купить
          </div>
        </div>
        <div onClick={() => navigate(`/send`)} className={`${styles.buttonHalf} ${styles.button}`}>
          <div className={styles.buttonBg}>
            Отправить
          </div>
        </div>
        <div onClick={() => navigate(`/sell`)} className={`${styles.buttonHalf} ${styles.button}`}>
          <div className={styles.buttonBg}>
            Продать
          </div>
        </div>
        <div onClick={() => navigate(`/create`)} className={styles.button}>
          <div className={styles.buttonBg}>
            Создать сделку
          </div>
        </div>
        <div onClick={() => navigate(`/history`)} className={styles.button}>
          <div className={styles.buttonBg}>
            Сделки
          </div>
        </div>
        <div onClick={() => navigate(`/history`)} className={styles.button}>
          <div className={styles.buttonBg}>
            Партнерские платежи
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlButtons;