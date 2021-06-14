import { combineReducers } from 'redux';
import { cartState } from './cartState';
import { phonesReducer } from './phonesReducer';
import { sidebarState } from './sidebarState';

export const rootReducer = combineReducers({
  phone: phonesReducer,
  sidebarState: sidebarState,
  cartState: cartState,
});

export type RootState = ReturnType<typeof rootReducer>;
