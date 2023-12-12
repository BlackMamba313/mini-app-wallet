import React from "react";
import styles from './SellPanel.module.css';

const SellPanel = () => {

  return (
    <div className={styles.wrapper}>
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
      <input
        type="number"
        placeholder='Выберите свою цену'
        className={styles.input}/>
      <input
        type="text"
        placeholder='Условия сделки'
        className={styles.input}/>

      <input
        type="number"
        placeholder='Лимиты'
        className={styles.input}/>
    </div>
  );
}
export default SellPanel;