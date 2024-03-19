import React, {useEffect} from 'react';
import styles from './KPIShow.module.css';
import CircularProgressBar from "../CircularProgressBar";
import {refStatData, userData} from "../../store/auth/selectors";
import {useDispatch, useSelector} from "react-redux";
import {GetStat} from "../../store/auth";

const KPIShow = () => {
  const dispatch = useDispatch();
  const {id} = useSelector(userData)
  const stat = useSelector(refStatData)
  // Функция для обработки нажатия кнопки поделиться
  const shareProject = () => {
    const refShare =`${process.env.REACT_APP_URL_JOKER_REG}?ref=${id}`
    navigator.clipboard.writeText(refShare);
  };

  useEffect(() => {
    dispatch(GetStat(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('GetStat>>>>', stat)
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
