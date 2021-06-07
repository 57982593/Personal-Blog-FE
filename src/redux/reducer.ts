import { combineReducers } from 'redux';
import { INCREASE } from './action';
function addNum(state = 0, action: any) {
  console.log('action', action);
  switch (action.type) {
    case INCREASE:
      return {state, num: state + action.num};
    default:
      return state;
  }
}
export default combineReducers({
  addNum,
})
