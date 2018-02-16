import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_TWITTER = 'FETCH_TWITTER';

export function fetchNews() {
  const request = axios.get('/api/news');

  return {
    type: FETCH_NEWS,
    payload: request
  }
}
export function fetchTwitter() {
  const request = axios.get('/api/twitter');

  return {
    type: FETCH_TWITTER,
    payload: request
  }
}
