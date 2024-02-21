import CryptoJS from 'crypto-js';

function useEncryption() {
  const encryptData = (jsonString, key, iv) => {
     // Преобразование объекта в строку JSON
    const cipher = CryptoJS.AES.encrypt(jsonString, key, { iv });
    return cipher.toString();
  };

  const encrypt = (dataToEncrypt) => {
    dataToEncrypt.ti = Math.floor(Date.now() / 1000);
    dataToEncrypt.to = localStorage.getItem('to');
    const jsonString = JSON.stringify(dataToEncrypt);
    const encryptionKey = process.env.REACT_APP_KEY
    const iv = process.env.REACT_APP_VI

    const encryptedData = encryptData(jsonString, encryptionKey, iv);

    return {
      encryptedData: encryptedData,
      requestData: {dataToEncrypt, encryptedData, jsonString}
    };
  };

  return { encrypt };
}

export default useEncryption;