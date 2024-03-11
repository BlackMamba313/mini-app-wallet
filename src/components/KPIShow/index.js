import React from 'react';
import styles from './KPIShow.module.css';

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
      {/* Круговая диаграмма KPI здесь */}
      <div className={styles.kpiCircle}>
        <div className={styles.kpiText}>
          YOU<br />
          KPI 25%
        </div>
      </div>

      <div
        className={styles.shareButton}
        onClick={shareProject}
      >
        Поделиться проектом
      </div>
    </div>
  );
};

export default KPIShow;
