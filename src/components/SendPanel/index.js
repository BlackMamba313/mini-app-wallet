import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import styles from './SendPanel.module.css';
import {transfer} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import useHashing from "../../hooks/useHashing";
import {userData} from "../../store/auth/selectors";
import {walletData} from "../../store/currency/selectors";
import SliderButton from "../SliderButton";
import {useNavigate} from "react-router-dom";

const SendPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hash } = useHashing();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { id }  = useSelector(userData) || {};
  const {token, network}  = useSelector(walletData) || {};
  const [transferData, setTransferData] = useState(null); // Состояние для хранения данных перевода
  const [isCompleted, setIsCompleted] = useState(false); // Состояние завершения
  const [isConfirming, setIsConfirming] = useState(false); // Состояние для отслеживания режима подтверждения перевода

  const onSubmit = async data =>  {
    const dataForHash = {...data, id, token, network, checkOnly: true}
    const { requestData } = hash(dataForHash);
    // Предполагаем, что dispatch(transfer()) асинхронный и возвращает данные о переводе
    try {
      const response = await dispatch(transfer(requestData));
      if (response.type === 'transfer/fulfilled') {
        setTransferData(response); // Сохраняем данные о переводе
        setIsConfirming(true)
         // Переходим в режим подтверждения
      } else {
        // Обработка ошибки или недостаточной информации для перевода
        console.error("Ошибка или недостаточно данных для перевода");
      }
    } catch (error) {
      console.error("Ошибка выполнения запроса на перевод", error);
    }
  };

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
        setIsCompleted(true);
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


  if (isConfirming && transferData) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.info}>
        <p className={styles.text}>Детали перевода:</p>
        <p>Итого перевод будет стоить: {Number(transferData.payload.commision) + Number(transferData.meta.arg.amount)}</p>
        <p>Адрес перевода перевода: </p>
        <p>{transferData.meta.arg.address}</p>
        </div>
        <SliderButton isCompleted={isCompleted} onComplete={onConfirm}/>
      </div>
    );
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("address", { required: "Это поле обязательно" })} // Регистрация поля с валидацией на обязательность
        type="text"
        placeholder='Адрес кошелька'
        className={styles.input}
      />
      {errors.walletAddress && <span>Это поле обязательно</span>}

      <input
        {...register("amount", {
          required: "Это поле обязательно",
          pattern: {
            value: /^[0-9]*[.,]?[0-9]*$/,
            message: "Введите корректную сумму"
          }
        })}
        type="text"
        inputMode="decimal"
        placeholder='Сумма'
        className={styles.input}
      />
      {errors.amount && <span>{errors.amount.message}</span>}
      <button type="submit" className={styles.sendButton}>Отправить</button>
    </form>
  );
};

export default SendPanel;