import React, {useState} from 'react';
import styles from './TransferConfirmation.module.css';
import SliderButton from "../SliderButton";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import useHashing from "../../hooks/useHashing";
import {transfer} from "../../store/auth";

const TransferConfirmation = ({ transferData }) => {
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hash } = useHashing();
  console.log(transferData)
  const onConfirm = async  () =>  {
    const {network, id, address, amount, token} = transferData.meta.arg
    const dataForHash = {
      id,
      amount,
      network,
      address,
      token}
    const { requestData } = hash(dataForHash);
    try {
      const response = await dispatch(transfer(requestData));
      if (response.type === 'transfer/fulfilled') {
        setIsSend(true)
        setTimeout(() => {
          navigate(`/`); // Редирект на главную страницу
        }, 1000);
      } else {
        console.error("Ошибка или недостаточно данных для перевода");
      }
    } catch (error) {
      console.error("Ошибка выполнения запроса на перевод", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p className={styles.text}>Детали перевода:</p>
        <p>Перевод в сети {transferData.meta.arg.network}</p>
        <p>Переводим {Number(transferData.meta.arg.amount)} {transferData.meta.arg.token}</p>
        <p>Комиссия за перевод: {transferData.payload.commision} {transferData.meta.arg.token}</p>
        <p>Адрес перевода: </p>
        <p>{transferData.meta.arg.address}</p>
      </div>
      <SliderButton isSend={isSend} onConfirm={onConfirm}/>
    </div>
  );
};

export default TransferConfirmation;
