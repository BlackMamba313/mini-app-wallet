import CryptoJS from 'crypto-js';

function useHashing() {
  const hmacSHA256Hash = (dataString, secretKey) => {
    const hash = CryptoJS.HmacSHA256(dataString, secretKey);
    return hash.toString(CryptoJS.enc.Hex);
  };

  const createSortedDataString = (dataToHash) => {
    dataToHash = dataToHash || {};
    // Преобразование логических значений в 1
    Object.keys(dataToHash).forEach(key => {
      if (typeof dataToHash[key] === 'boolean') {
        dataToHash[key] = dataToHash[key] ? 1 : 0;
      }
    });
    // Добавляем временную метку ti
    dataToHash.ti = Math.floor(Date.now() / 1000);

    // Создаем отсортированную строку для хеширования
    const sortedKeys = Object.keys(dataToHash).sort();
    const dataString = sortedKeys.map(key => `${key}=${dataToHash[key]}`).join('|');
    return { dataString, ti: dataToHash.ti };
  };

  const hash = (dataToHash) => {
    const { dataString, ti } = createSortedDataString(dataToHash);
    const secretKey = process.env.REACT_APP_SECRET_KEY_HASH;

    const si = hmacSHA256Hash(dataString, secretKey);

    return {
      requestData: { ...dataToHash, si, ti }
    };
  };

  return { hash };
}

export default useHashing;



