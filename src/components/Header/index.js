import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import ReturnIcon from "../../assets/ReturnIcon";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {currentRate, userFiat} from "../../store/currency/selectors";

const Header = ({title, activeWallet}) => {
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();
  const fiat = useSelector(userFiat);
  const rate = useSelector(currentRate)
  useEffect(() => {
    setUpdate( !update); // Принудительное обновление компонента при изменении activeWallet
  }, [activeWallet]);
  console.log(update)
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
      По курсу за 1 {activeWallet.token} {rate} {fiat}
    </div>
    </div>
  );
};

export default Header;