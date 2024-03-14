import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './TransferForm.module.css';

const TransferForm = ({ onSubmit, QRdata }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <p>{QRdata}</p>
      <input
        {...register("address", { required: "Это поле обязательно" })}
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

export default TransferForm;
