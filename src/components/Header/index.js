import React from 'react';
import styles from './Header.module.css';
import ReturnIcon from "../../assets/ReturnIcon";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {currentRate, walletData, userData} from "../../store/auth/selectors";

const Header = ({title}) => {
  const activeWallet = useSelector(walletData)
  const navigate = useNavigate();
  const user = useSelector(userData);
  const rate = useSelector(currentRate);
  return (
    <div>
      {title && <div className={styles.header}>
        <div onClick={() => navigate(-1)} className={styles.btnReturn}>
          <ReturnIcon/>
        </div>
        <h2>{title}</h2>
      </div>
      }
      {activeWallet &&
        <div className={styles.cost}>
          По курсу за 1<span className={styles.currency}> {activeWallet.token} </span>{rate} {user?.iso}
        </div>
      }
    </div>
  );
};

export default Header;