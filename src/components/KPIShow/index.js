import React, {useEffect} from 'react';
import styles from './KPIShow.module.css';
import CircularProgressBar from "../CircularProgressBar";
import {refStatData, userData} from "../../store/auth/selectors";
import {useDispatch, useSelector} from "react-redux";
import {GetStat} from "../../store/auth";
import useHashing from "../../hooks/useHashing";

const KPIShow = () => {
  const dispatch = useDispatch();
  const {hash} = useHashing();
  const {id} = useSelector(userData)
  const stat = useSelector(refStatData)
  // Функция для обработки нажатия кнопки поделиться
  const shareProject = () => {
    const refShare = `${process.env.REACT_APP_URL_JOKER_REG}?ref=${id}`
    navigator.clipboard.writeText(refShare);
  };

  useEffect(() => {
    const {requestData} = hash({id: id});
    dispatch(GetStat(requestData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('GetStat>>>>', stat)
  return (
    <div className={styles.container}>
      {stat && <>
        <div className={styles.stat}>
          Total users<br/>
          <span className={styles.statValue}>{stat.count}</span>
        </div>
        <div className={styles.stat}>
          Total balance<br/>
          <span className={styles.statValue}>{stat.bal} usdt</span>
        </div>
        <CircularProgressBar value={stat.kpi}/>
        <div
          className={styles.shareButton}
          onClick={shareProject}
        >
          Share Project
        </div>
      </>
      }
    </div>
  );
};

export default KPIShow;
