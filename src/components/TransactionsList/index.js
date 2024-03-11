import React from 'react';
import { format } from 'date-fns';
import styles from './TransactionsList.module.css';

const TransactionsList = ({ transactions }) => {
  const formatDateTime = (isoString) => {
    return format(new Date(isoString), 'd MMM yyyy, HH:mm'); // Форматируем дату и время
  };

  // Функция для определения класса в зависимости от знака транзакции
  const getTransactionClass = (sign) => {
    return sign === 1 ? styles.income : styles.outcome;
  };

  return (
    <div className={styles.transactionList}>
      {transactions.map((transaction, index) => (
        <div key={index} className={`${styles.transactionCard} ${getTransactionClass(transaction.sign)}`}>
          <div className={styles.dateTime}>
            {formatDateTime(transaction.dt)}
          </div>
          <div className={styles.amount}>
            {transaction.am}
            {transaction.token}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;

