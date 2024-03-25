import React from 'react';
import styles from './Transaction.module.css';
import {format} from "date-fns";
const Transaction = ({transaction}) => {

  const formatDateTime = (isoString) => {
    return format(new Date(isoString), 'd MMM yyyy, HH:mm');
  };

  const getTransactionClass = (sign) => {
    return sign === 1 ? 'Получено' : 'Отправлено';
  };

  const getColor = (currency) => {
    if (currency === 'TRX') {
      return '#d21d25';
    } else if (currency === 'USDT') {
      return '#52ae94';
    }
  };

  return (
       <div className={styles.container}>
         <div className={styles.cardRow}>
           <div className={styles.dateTime}>{getTransactionClass(transaction.sign)}</div>
           <div className={styles.amount}>
             {transaction.am}
           </div>
         </div>
         <div className={styles.cardRow}>
           <div className={styles.dateTime}>
             {formatDateTime(transaction.dt)}
           </div>
           <div style={{color: getColor(transaction.token)}}>
             {transaction.token}
           </div>
         </div>
       </div>
  );
};

export default Transaction;



