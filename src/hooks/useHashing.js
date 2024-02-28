import CryptoJS from 'crypto-js';

function useHashing() {
  const hmacSHA256Hash = (dataString, secretKey) => {
    const hash = CryptoJS.HmacSHA256(dataString,"|", secretKey);
    console.log('hashing:', dataString, secretKey);
    return hash.toString(CryptoJS.enc.Hex);
  };

  const createSortedDataString = (dataToHash) => {
    // Преобразование логических значений в 1
    Object.keys(dataToHash).forEach(key => {
      if (typeof dataToHash[key] === 'boolean') {
        dataToHash[key] = dataToHash[key] ? 1 : 0;
      }
    });
    dataToHash.ti = Math.floor(Date.now() / 1000);
    const sortedKeys = Object.keys(dataToHash).sort();
    const dataString = sortedKeys.map(key => `${key}=${dataToHash[key]}`).join('|');
    console.log('Sorted data string for hashing:', dataString);

    return dataString;
  };

  const hash = (dataToHash) => {
    const dataString = createSortedDataString(dataToHash);
    const secretKey = process.env.REACT_APP_SECRET_KEY_HASH;

    const si = hmacSHA256Hash(dataString, secretKey);

    return {
      requestData: { ...dataToHash, si, dataString }
    };
  };

  return { hash };
}

export default useHashing;



