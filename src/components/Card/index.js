import React from 'react';
import styles from './Card.module.css';
import { useQuery, gql } from '@apollo/client';
import {useTelegram} from "../../hooks/useTelegram";
import SecurityIcon from "../../assets/SecurityIcon";
import AccountIcon from "../../assets/AccountIcon";

const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUser(id: $userId) {
      id
      userName
    }
  }
`;

const Card = ({id, currency, walletNumber}) => {
  const {user} = useTelegram();
  const userId = user.id;


  const getUser = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {loading, error, data} = useQuery(GET_USER_BY_ID, {
      variables: {userId},
    });

    // Обработка состояний запроса
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const userData = data.getUser;

    console.log('user>>>>>>>>>>>>>>>.', userData)
  }

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
        <p onClick={getUser} className={styles.userName}>Ваше имя пользователя:
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