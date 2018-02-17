import { FETCH_SCHEDULE } from '../actions'

export default function (state = {schedule: []}, action) {
  console.log(action)
  switch (action.type) {
    case FETCH_SCHEDULE:
      return {...state, schedule: action.payload.data};
    default:
      return state;
  }
}
