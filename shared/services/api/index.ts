import axios from 'axios';

export default axios.create({
  baseURL: process.env._BASE_URL,
  responseType: 'json',
});