import React from "react";
import styles from './BuyPanel.module.css';

const BuyPanel = () => {

  return (
    <div className={styles.wrapper}>
      <div  className={styles.button}>
        <div className={styles.buttonBg}>
          Предложения: 285
        </div>
      </div>
      <p className={styles.text}>Выберите Способ</p>
      <div  className={styles.button}>
        <div className={styles.buttonBg}>
          Подать объявление
        </div>
      </div>
    </div>
  );
}
export default BuyPanel;