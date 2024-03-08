import React from 'react';
import styles from './Card.module.css';
import SecurityIcon from "../../assets/SecurityIcon";
import AccountIcon from "../../assets/AccountIcon";
import {motion} from 'framer-motion';
import {userData} from "../../store/auth/selectors";
import {useSelector} from "react-redux";
import {currentRate, userFiat} from "../../store/currency/selectors";

const Card = ({network, address, token, balance}) => {
  const user = useSelector(userData);
  const fiat = useSelector(userFiat);
  const rate = useSelector(currentRate);

  const cardAnimationStyle = user ? {filter: 'blur(0px)'} : {filter: 'blur(4px)'};

  return (
    <div className={styles.wrapper}>
        <motion.div
          initial={{ filter: 'blur(0px)' }}
          animate={cardAnimationStyle}
          transition={{ duration: 0.5 }}
          className={styles.card}>
          <div className={styles.cardHeader}>
            <p className={styles.cardTitle}>Ваш баланс</p>
            <p className={styles.currency}>{token}/{fiat}</p>
          </div>
          <p className={styles.mainBalance}>{balance ? parseFloat(balance).toFixed(3) : '0.00'}</p>
          <p className={styles.subBalance}>
            {balance*rate} {fiat}
          </p>
          <p className={styles.walletNumber}>{address}</p>
          <p className={styles.userName}>Имя пользователя: {user?.userName}</p>
          <div className={styles.cardFooter}>
            <div className={styles.cardFooterBox}>
              <p className={styles.cardId}><AccountIcon/>ID {user?.id}</p>
            </div>
            <div className={styles.cardFooterBox}>
              <p className={styles.cardStatus}><SecurityIcon/> Не проверено!</p>
            </div>
            <div className={styles.network}>{network}</div>
          </div>
      </motion.div>
    </div>
  );
};

export default Card;