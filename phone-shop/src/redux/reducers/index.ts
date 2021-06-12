import { combineReducers } from 'redux';
import { phonesReducer } from './phonesReducer';
import { sidebarState } from './sidebarState';

export const rootReducer = combineReducers({
  phone: phonesReducer,
  sidebarState: sidebarState,
});

export type RootState = ReturnType<typeof rootReducer>;
