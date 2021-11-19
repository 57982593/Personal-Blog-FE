import { INCREASE, SUBTRACTION } from '../actions';

const initState = {
  num: 0,
};

export function reducer( state = initState, action: any ) {
  switch (action.type) {
    case INCREASE:
      return { num: state.num + 1 };// TODO return返回的值必须为对象,原因未知...
    case SUBTRACTION:
      return { num: state.num - 1 };
    default:
      return state;
  }
}
