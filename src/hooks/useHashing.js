import CryptoJS from 'crypto-js';

function useHashing() { // Переименовано для отражения использования хеширования
                        // Функция для создания HMAC SHA-256
  const hmacSHA256Hash = (jsonString, secretKey) => { // Ясно указывает на хеширование
    const hash = CryptoJS.HmacSHA256(jsonString, secretKey);
    return hash.toString(CryptoJS.enc.Hex);
  };

  const hash = (dataToHash) => { // Переименовано для отражения действия хеширования
    dataToHash.ti = Math.floor(Date.now() / 1000);
    dataToHash.to = localStorage.getItem('to');
    const jsonString = JSON.stringify(dataToHash);

    // Используйте секретный ключ из переменных окружения
    const secretKey = process.env.REACT_APP_SECRET_KEY_HASH;

    // Создание HMAC SHA-256 хеша из JSON строки и секретного ключа
    const si = hmacSHA256Hash(jsonString, secretKey);

    return {
      hashedData: si,
      requestData: {dataToHash, si}
    };
  };

  return { hash }; // Возвращаем объект с функцией hash
}

export default useHashing;