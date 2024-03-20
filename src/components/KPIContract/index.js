import React from 'react';
import styles from './KPIContract.module.css';
import {userData} from "../../store/auth/selectors";
import {useDispatch, useSelector} from "react-redux";
import useHashing from "../../hooks/useHashing";
import {SignContract} from "../../store/auth";

const KPIContract = () => {
  const dispatch = useDispatch();
  const {hash} = useHashing();
  const {id} = useSelector(userData)
  // Функция для обработки нажатия кнопки Согласен
  const clickBtn = () => {
    const {requestData} = hash({id: id});
    dispatch(SignContract(requestData))
  }

  return (
    <div className={styles.container}>
      <p className={styles.text}>Согласны ли вы отдать свою почку голодающему народу африки?</p>
      <div onClick={clickBtn} className={styles.button}>
        Согласен
      </div>
    </div>
  );
};

export default KPIContract;
