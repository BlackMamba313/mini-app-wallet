import CryptoJS from 'crypto-js';

function useHashing() {
  // Функция для создания HMAC SHA-256 хеша
  const hmacSHA256Hash = (dataString, secretKey) => {
    const hash = CryptoJS.HmacSHA256(dataString, secretKey);
    return hash.toString(CryptoJS.enc.Hex);
  };

  // Функция для создания отсортированной строки из объекта данных
  const createSortedDataString = (dataToHash) => {
    // Добавляем временную метку
    dataToHash.ti = Math.floor(Date.now() / 1000);

    // Сортируем ключи и создаем строку в формате 'ключ=значение', разделенную переносами строк
    const sortedKeys = Object.keys(dataToHash).sort();
    const dataString = sortedKeys.map(key => `${key}=${dataToHash[key]}`).join('\n');

    return dataString;
  };

  // Функция хеширования данных
  const hash = (dataToHash) => {
    // Создаем отсортированную строку из данных
    const dataString = createSortedDataString(dataToHash);

    // Используем секретный ключ из переменных окружения
    const secretKey = process.env.REACT_APP_SECRET_KEY_HASH;

    // Создаем HMAC SHA-256 хеш отсортированной строки и секретного ключа
    const si = hmacSHA256Hash(dataString, secretKey);

    // Возвращаем хеш и исходные данные с добавленной подписью
    return {
      hashedData: si,
      requestData: { ...dataToHash, si }
    };
  };

  return { hash }; // Возвращаем объект с функцией hash
}

export default useHashing;
