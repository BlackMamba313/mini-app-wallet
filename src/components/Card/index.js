import React from 'react';
import styles from './Card.module.css';
import {useTelegram} from "../../hooks/useTelegram";
import SecurityIcon from "../../assets/SecurityIcon";
import AccountIcon from "../../assets/AccountIcon";



const Card = ({id, currency, walletNumber}) => {
  const { user } = useTelegram();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <p className={styles.cardTitle}>Ваш баланс</p>
          <p className={styles.currency}>{currency}</p>
        </div>
        <p className={styles.mainBalance}>100000</p>
        <p className={styles.subBalance}>542441.01₽</p>
        <p className={styles.walletNumber}>{walletNumber}</p>
        <p className={styles.userName}>Ваше имя пользователя:
          {user?.username}
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterBox}>
            <p className={styles.cardId}><AccountIcon/> ID {id}</p>
          </div>
          <div className={styles.cardFooterBox}>
              <p className={styles.cardStatus}> <SecurityIcon/> Не проверено!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;