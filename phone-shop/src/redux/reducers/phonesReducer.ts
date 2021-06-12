import { phone, phonesActionType, userAction } from './types';

const initialState: phone[] = [];

export const phonesReducer = (
  state = initialState,
  action: userAction
): phone[] => {
  switch (action.type) {
    case phonesActionType.FETCH_PHONES:
      return [action.payload];
    default:
      return state;
  }
};
