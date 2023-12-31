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
      <div className={styles.payWrapper}>
        <div className={styles.payBtn}>
          Сбер
        </div>
        <div className={styles.payBtn}>
          Wisa
        </div>
        <div className={styles.payBtn}>
          Альфа
        </div>
        <div className={styles.payBtn}>
          Fast
        </div>
        <div className={styles.payBtn}>
          Union
        </div>
      </div>
      <div  className={styles.button}>
        <div className={styles.buttonBg}>
          Подать объявление
        </div>
      </div>
    </div>
  );
}
export default BuyPanel;