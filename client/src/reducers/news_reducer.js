import { FETCH_NEWS } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {...state, news: action.payload};
  }

  return state;
}
