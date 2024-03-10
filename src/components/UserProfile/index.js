import React from 'react';
import {useForm} from 'react-hook-form';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues: {
      currency: "RUB", // Устанавливаем дефолтное значение для валюты
      language: "ru" // Устанавливаем дефолтное значение для языка
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarSection}>
        {/* Место для аватара пользователя */}
        {/*<img src="/path/to/avatar.png" alt="User Avatar" className={styles.userAvatar} />*/}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.profileForm}>
        <input className={styles.input} {...register("email")} placeholder="Электронная почта"/>
        <input className={styles.input} {...register("phoneNumber")} placeholder="Номер телефона"/>
        <div className={styles.selectsWrapper}>
          <select className={styles.select} {...register("currency")}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
            {/* Добавить другие валюты по необходимости */}
          </select>
          <select className={styles.select} {...register("language")}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="es">Español</option>
          </select>
        </div>

        <button type="submit" className={styles.saveButton}>Сохранить изменения</button>
        <button type="button" className={styles.verifyButton}>Верифицировать аккаунт</button>
        <button type="button" className={styles.partnerButton}>Подписаться на партнерскую программу</button>
      </form>
    </div>
  );
};

export default UserProfile;
