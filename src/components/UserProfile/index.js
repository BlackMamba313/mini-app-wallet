import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarSection}>
        {/* Место для аватара пользователя */}
        {/*<img src="/path/to/avatar.png" alt="User Avatar" className={styles.userAvatar} />*/}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.profileForm}>
        <input {...register("email")} placeholder="Электронная почта" />
        <input {...register("phoneNumber")} placeholder="Номер телефона" />
        <select {...register("currency")}>
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          {/* Добавить другие валюты по необходимости */}
        </select>
        <select {...register("language")}>
          <option value="">Выберите язык</option>
          <option value="en">Английский</option>
          <option value="ru">Русский</option>
          <option value="es">Испанский</option>
        </select>
        {errors.language && <span>Это поле обязательно</span>}

        <button type="submit" className={styles.saveButton}>Сохранить изменения</button>
        <button type="button" className={styles.verifyButton}>Верифицировать аккаунт</button>
        <button type="button" className={styles.partnerButton}>Подписаться на партнерскую программу</button>
      </form>
    </div>
  );
};

export default UserProfile;
