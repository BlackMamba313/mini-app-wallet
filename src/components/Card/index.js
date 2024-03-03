import React from 'react';
import styles from './Card.module.css';
import SecurityIcon from "../../assets/SecurityIcon";
import AccountIcon from "../../assets/AccountIcon";
import { motion } from 'framer-motion';
import {userData} from "../../store/auth/selectors";
import {useSelector} from "react-redux";
import {currentFiat} from "../../store/currency/selectors";



const Card = ({network, address, token, balance}) => {
  const user = useSelector(userData);
  const fiat = useSelector(currentFiat)

  console.log('user>>>>>>>>>', user)

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.network}> {network} </div>
        <div className={styles.cardHeader}>
          <p className={styles.cardTitle}>Ваш баланс</p>
          <p className={styles.currency}>{token}/{fiat}</p>
        </div>
        <p className={styles.mainBalance}>{balance}</p>
        <motion.p
          initial={{ filter: 'blur(0px)' }}
          animate={{ filter: 'blur(4px)' }}
          transition={{ duration: 0.5 }}
          className={styles.subBalance}
        >
        542441.01руб</motion.p>
        <p className={styles.walletNumber}>{address}</p>
        <p className={styles.userName}>Ваше имя пользователя:
          {user.userName}
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterBox}>
            <p className={styles.cardId}><AccountIcon/> ID {user?.id}</p>
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