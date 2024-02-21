import axios from 'axios';

const {REACT_APP_API_URL} = process.env
function customStringify(obj){
  return JSON.stringify(obj);
}


const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,

  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => customStringify(params),
});

export default axiosInstance ;
