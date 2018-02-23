import { FETCH_STATS } from '../actions'

export default function (state = {stats: {}}, action) {
  switch (action.type) {
    case FETCH_STATS:
      return {...state, stats: action.payload.data};
    default:
      return state;
  }
}
