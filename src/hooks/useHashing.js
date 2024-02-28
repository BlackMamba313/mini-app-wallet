import CryptoJS from 'crypto-js';

function useHashing() {
  const hmacSHA256Hash = (dataString, secretKeyHex) => {
    const secretKey = CryptoJS.enc.Hex.parse(secretKeyHex);
    const hash = CryptoJS.HmacSHA256(dataString, secretKey);
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
    const dataString = sortedKeys.map(key => `${key}=${dataToHash[key]}`).join('\n');
    console.log('Sorted data string for hashing:', dataString);

    return dataString;
  };

  const hash = (dataToHash) => {
    const dataString = createSortedDataString(dataToHash);
    const secretKeyHex = process.env.REACT_APP_SECRET_KEY_HASH;

    const si = hmacSHA256Hash(dataString, secretKeyHex);

    return {
      requestData: { ...dataToHash, si }
    };
  };

  return { hash };
}

export default useHashing;



