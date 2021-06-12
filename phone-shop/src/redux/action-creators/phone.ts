import { Dispatch } from 'redux';
import { phoneAction, phonesActionType } from '../reducers/types';

export const fetchPhones = (action: phoneAction) => {
  return async (dispatch: Dispatch<phoneAction>) => {
    try {
      dispatch({ type: phonesActionType.FETCH_PHONES, payload: [action] });
    } catch {
      console.log('Error');
    }
  };
};
