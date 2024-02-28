import CryptoJS from 'crypto-js';

function useHashing() {
  // Функция для создания HMAC SHA-256 хеша
  const hmacSHA256Hash = (dataString, secretKeyHex) => {
    // Преобразование шестнадцатеричного представления секретного ключа в WordArray для CryptoJS
    const secretKey = CryptoJS.enc.Hex.parse(secretKeyHex);
    const hash = CryptoJS.HmacSHA256(dataString, secretKey);
    return hash.toString(CryptoJS.enc.Hex);
  };

  // Функция для создания отсортированной строки из объекта данных
  const createSortedDataString = (dataToHash) => {
    // Преобразование и исключение несущественных значений
    const filteredDataToHash = Object.entries(dataToHash).reduce((acc, [key, value]) => {
      if (value || typeof value === 'number' || value === 0) {
        acc[key] = typeof value === 'boolean' ? 1 : value;
      }
      return acc;
    }, {});

    filteredDataToHash.ti = Math.floor(Date.now() / 1000); // Добавляем временную метку

    const sortedKeys = Object.keys(filteredDataToHash).sort();
    return sortedKeys.map(key => `${key}=${filteredDataToHash[key]}`).join('\n');
  };

  // Функция хеширования данных
  const hash = (dataToHash) => {
    const dataString = createSortedDataString(dataToHash);
    const secretKeyHex = process.env.REACT_APP_SECRET_KEY_HASH; // Получаем ключ в виде шестнадцатеричной строки

    const si = hmacSHA256Hash(dataString, secretKeyHex); // Генерируем подпись

    return {
      hashedData: si,
      requestData: { ...dataToHash, si: si }
    };
  };

  return { hash }; // Возвращаем объект с функцией hash
}

export default useHashing;




