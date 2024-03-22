import React, {useState} from 'react';
import styles from './TransferConfirmation.module.css';
import SliderButton from "../SliderButton";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {transfer} from "../../store/auth";
import useToast from "../../hooks/useToast";

const TransferConfirmation = ({ transferData, setTransferData }) => {
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();
  const showToast = useToast();
  const dispatch = useDispatch();
  const onConfirm = async  () =>  {
    const {network, id, address, amount, token} = transferData.meta.arg
    const dataForRequest = {
      id,
      amount,
      network,
      address,
      token}
    try {
      const response = await dispatch(transfer(dataForRequest));
      if (response.type === 'transfer/fulfilled') {
        setIsSend(true)
        setTimeout(() => {
          navigate(`/`); // Редирект на главную страницу
        }, 1500);
      } else {
        await showToast({icon: 'error', title: 'transfer error!'})
        setTimeout(() => {
          setTransferData(null)
        }, 1500);
      }
    } catch (error) {
      await showToast({icon: 'error', title: 'transfer error!'})
      setTimeout(() => {
        setTransferData(null)
      }, 1500);
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
