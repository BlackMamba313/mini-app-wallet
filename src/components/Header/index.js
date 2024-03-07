import React from 'react';
import styles from './Header.module.css';
import ReturnIcon from "../../assets/ReturnIcon";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userFiat} from "../../store/currency/selectors";
import {walletData} from "../../store/auth/selectors";

const Header = ({title}) => {
  const activeWallet  = useSelector(walletData)
  const navigate = useNavigate();
  const fiat = useSelector(userFiat);
  return (
    <div>
      {title && <div className={styles.header}>
        <div onClick={() => navigate(-1)} className={styles.btnReturn}>
          <ReturnIcon/>
        </div>
        <h2>{title}</h2>
      </div>
      }
    <div className={styles.cost}>
      По курсу за 1 {activeWallet.token} ??? {fiat}
    </div>
    </div>
  );
};

export default Header;