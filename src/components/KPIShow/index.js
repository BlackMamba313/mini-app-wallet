import React from 'react';
import styles from './KPIShow.module.css';
import CircularProgressBar from "../CircularProgressBar";
import {userData} from "../../store/auth/selectors";
import {useSelector} from "react-redux";

const KPIShow = () => {
  const {id} = useSelector(userData)
  // Функция для обработки нажатия кнопки поделиться
  const shareProject = () => {
    const refShare =`${process.env.REACT_APP_URL_JOKER_REG}?ref=${id}`
    navigator.clipboard.writeText(refShare);
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
