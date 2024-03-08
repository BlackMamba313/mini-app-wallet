import React from 'react';
import styles from './ControlButtons.module.css';
import {useNavigate} from "react-router-dom";
import PartnersIcon from "../../assets/icons/PartnersIcon";
import P2pIcon from "../../assets/icons/P2pIcon";
import SendIcon from "../../assets/icons/SendIcon";
import ReseiveIcon from "../../assets/icons/ReseiveIcon";
import {useSelector} from "react-redux";
import {walletData} from "../../store/currency/selectors";

const ControlButtons = () => {
  const navigate = useNavigate();
  const activeWallet = useSelector(walletData)
  return (
    <div className={styles.wrapper}>
      {activeWallet &&
        <div className={styles.buttonWrapper}>
          <div onClick={() => navigate(`/receive`)} style={{marginTop: 7}}>
            <ReseiveIcon width={42} height={42}/>
          </div>
          <div onClick={() => navigate(`/send`)} style={{marginTop: 7}}>
            <SendIcon width={42} height={42}/>
          </div>
          <div onClick={() => navigate(`/history`)}>
            <P2pIcon width={57} height={57}/>
          </div>
          <div onClick={() => navigate(`/history`)} style={{marginTop: 13}}>
            <PartnersIcon width={32} height={32}/>
          </div>
        </div>
      }
    </div>
  );
};

export default ControlButtons;