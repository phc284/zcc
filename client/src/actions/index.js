import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews() {
  const request = axios.get('/api/news');
  return {
    type: FETCH_NEWS,
    payload: request
  }
}
