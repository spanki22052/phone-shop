import { cartAction, cartActionType } from './types';

const initialState: number = 0;

export const cartState = (state = initialState, action: cartAction): number => {
  switch (action.type) {
    case cartActionType.ADD_ONE:
      return state + 1;
    case cartActionType.MINUS_ONE:
      return state - 1;
    case cartActionType.RESTART_CART:
      return 0;
    case cartActionType.ADD_MANY:
      return state + action.payload;
    case cartActionType.MINUS_MANY:
      return state - action.payload;
    default:
      return state;
  }
};
