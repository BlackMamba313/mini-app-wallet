import React, { useState } from 'react';
import QRScanModal from '../QRScanModal';
import TransferForm from '../TransferForm';
import TransferConfirmation from '../TransferConfirmation'; // Импорт нового компонента
import {useDispatch, useSelector} from "react-redux";
import {userData, walletData} from "../../store/auth/selectors";
import useHashing from "../../hooks/useHashing";
import {transfer} from "../../store/auth";
import styles from './SendPanel.module.css';
import Swal from "sweetalert2";

const SendPanel = ({isScannerOpen, setIsScannerOpen}) => {
  const dispatch = useDispatch();
  const { hash } = useHashing();
  // Хуки, состояния, функции обработки...
  const [transferData, setTransferData] = useState(null);
  const { id }  = useSelector(userData) || {};
  const {token, network}  = useSelector(walletData) || {};
  // Остальные состояния и логика...
  const onSubmit = async data =>  {
    const dataForHash = {...data, id, token, network, checkOnly: true}
    const { requestData } = hash(dataForHash);
    // Предполагаем, что dispatch(transfer()) асинхронный и возвращает данные о переводе
    try {
      const response = await dispatch(transfer(requestData));
      if (response.type === 'transfer/fulfilled') {
        setTransferData(response); // Сохраняем данные о переводе
        // Переходим в режим подтверждения
      } else {
        // Обработка ошибки или недостаточной информации для перевода
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: 'transfer error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
  // Функции onSubmit, onConfirm и т.д...

  const handleScan = async data => {
    const parsedData = JSON.parse(data);
    const { requestData } = hash({...parsedData, id, checkOnly: true});
    setIsScannerOpen(false); // Закрываем сканер после сканирования
    try {
      const response = await dispatch(transfer(requestData));
      if (response.type === 'transfer/fulfilled') {
        setTransferData(response);
      } else {
        // Обработка ошибки или недостаточной информации для перевода
        console.error("Ошибка или недостаточно данных для перевода");
      }
    } catch (error) {
      console.error("Ошибка выполнения запроса на перевод", error);
    }
  };

  if (transferData) {
    return <TransferConfirmation transferData={transferData} setTransferData={setTransferData} />;
  }

  // Возвращение TransferForm и QRScanModal, если не в режиме подтверждения
  return (
    <>
      {isScannerOpen ?  <QRScanModal onScan={handleScan} /> :
        <><div className={styles.scanBtn} onClick={() => setIsScannerOpen(true)}>Сканировать QR код</div>
      <TransferForm onSubmit={onSubmit}/></>}

    </>
  );
};

export default SendPanel;
