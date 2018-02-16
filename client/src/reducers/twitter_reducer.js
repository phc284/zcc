import { FETCH_TWITTER } from '../actions'

export default function (state = {twitter: []}, action) {
  switch (action.type) {
    case FETCH_TWITTER:
      return {...state, twitter: action.payload.data};
    default:
      return state;
  }
}
