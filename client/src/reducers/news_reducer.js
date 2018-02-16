import { FETCH_NEWS } from '../actions'

export default function (state = {news: []}, action) {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_NEWS:
      return {...state, news: action.payload.data};
  }
  return state;
}
