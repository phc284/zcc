import { combineReducers } from 'redux';

import NewsReducer from './news_reducer'
import TwitterReducer from './twitter_reducer'
import ScheduleReducer from './schedule_reducer'
import StatsReducer from './stats_reducer'

const rootReducer = combineReducers({
  news: NewsReducer,
  twitter: TwitterReducer,
  schedule: ScheduleReducer,
  stats: StatsReducer
});

export default rootReducer;
