import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom'; // Импортируем useLocation
import styles from './TransferForm.module.css';

const TransferForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const location = useLocation(); // Получаем текущий URL

  // Извлекаем параметр 'address' из URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const address = queryParams.get('address');
    if (address) {
      setValue('address', address);
    }
  }, [location, setValue]);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("address", { required: "Это поле обязательно" })}
        type="text"
        placeholder='Адрес кошелька'
        className={styles.input}
      />
      {errors.address && <span>{errors.address.message}</span>}
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

