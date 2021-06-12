import { combineReducers } from 'redux';
import { phonesReducer } from './phonesReducer';

export const rootReducer = combineReducers({
  phone: phonesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
