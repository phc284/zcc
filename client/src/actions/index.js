import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_TWITTER = 'FETCH_TWITTER';
export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';
export const FETCH_STATS = 'FETCH_STATS';

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

export function fetchSchedule() {
  const request = axios.get('/api/schedule');

  return {
    type: FETCH_SCHEDULE,
    payload: request
  }
}

export function fetchStats() {
  const request = axios.get('/api/teamstats');

  return {
    type: FETCH_STATS,
    payload: request
  }
}
