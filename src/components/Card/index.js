import React from 'react';
import styles from './Card.module.css';
import {useTelegram} from "../../hooks/useTelegram";
import SecurityIcon from "../../assets/SecurityIcon";
import AccountIcon from "../../assets/AccountIcon";

const Card = () => {
  const {user} = useTelegram();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <p className={styles.cardTitle}>Ваш баланс</p>
          <p className={styles.cardTitle}>BTC/RUB</p>
        </div>
        <p className={styles.mainBalance}>100000</p>
        <p className={styles.subBalance}>542441.01₽</p>
        <p className={styles.walletNumber}>0x22aBb2d0e8A52eF99B8C095EFdC709176574AA82</p>
        <p className={styles.userName}>Ваше имя пользователя:
          {user?.username}
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterBox}>
            <AccountIcon/>
            <p className={styles.cardId}>ID 098311</p>
          </div>
          <div className={styles.cardFooterBox}>
            <SecurityIcon/>
            <p className={styles.cardStatus}>Не проверено!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;