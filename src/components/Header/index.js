import React from 'react';
import styles from './Header.module.css';
import ReturnIcon from "../../assets/ReturnIcon";
import {useNavigate} from "react-router-dom";

const Header = ({title}) => {
  const navigate = useNavigate();
  const moskData = {
    cost: 'По курсу за 1 BTC 4 642 440.01₽',
  }
  console.log(navigate)
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
      {moskData.cost}
    </div>
    </div>
  );
};

export default Header;