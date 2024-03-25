import React, { useState } from 'react';
import styles from './TransactionsList.module.css';
import { motion } from 'framer-motion';
import TransactionDetails from "../TransactionDetails";
import Transaction from "../Transaction";

const TransactionsList = ({ transactions }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Анимация для деталей
  const detailsAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };

  return (
    <div className={styles.transactionList}>
      {transactions.map((transaction) => (
        <motion.div key={transaction.id}
                    layout
                    initial="hidden"
                    animate={expanded === transaction.id ? "visible" : "hidden"}
                    className={`${styles.transactionCard}`}
                    onClick={() => toggleExpanded(transaction.id)}>
          <Transaction transaction={transaction}/>
          <motion.div  variants={detailsAnimation}>
            <TransactionDetails transaction={transaction}/>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TransactionsList;



