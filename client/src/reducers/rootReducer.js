import { combineReducers } from 'redux';

import NewsReducer from './news_reducer'
import TwitterReducer from './twitter_reducer'

const rootReducer = combineReducers({
  news: NewsReducer,
  twitter: TwitterReducer
});

export default rootReducer;
