import React from 'react';
import {format} from 'date-fns';
import styles from './TransactionsList.module.css';

const TransactionsList = ({transactions}) => {
  const formatDateTime = (isoString) => {
    return format(new Date(isoString), 'd MMM yyyy, HH:mm'); // Форматируем дату и время
  };

  // Функция для определения класса в зависимости от знака транзакции
  const getTransactionClass = (sign) => {
    return sign === 1 ? 'Получено' : 'Отправлено';
  };

  const getCollor = (currency) => {
    if (currency === 'TRX') {
      return '#d21d25'
    } else if (currency === 'USDT') {
      return '#52ae94'
    }
  };

  return (
    <div className={styles.transactionList}>
      {transactions.map((transaction, index) => (
        <div key={index} className={`${styles.transactionCard} ${getTransactionClass(transaction.sign)}`}>
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
            <div style={{color: getCollor(transaction.token)}}>
              {transaction.token}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;

