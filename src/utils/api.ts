import axios from 'axios';
import { API_URL } from '../config/const';

export const api = axios.create({
  baseURL: API_URL,
});
