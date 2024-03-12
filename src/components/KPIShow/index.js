import React from 'react';
import styles from './KPIShow.module.css';
import CircularProgressBar from "../CircularProgressBar";

const KPIShow = () => {

  // Функция для обработки нажатия кнопки поделиться
  const shareProject = () => {
    // Ваша логика для поделиться проектом
  };

  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        Total users<br />
        <span className={styles.statValue}>0</span>
      </div>
      <div className={styles.stat}>
        Total balance<br />
        <span className={styles.statValue}>0 usdt</span>
      </div>
      <CircularProgressBar value={25}/>

      <div
        className={styles.shareButton}
        onClick={shareProject}
      >
        Share Project
      </div>
    </div>
  );
};

export default KPIShow;
