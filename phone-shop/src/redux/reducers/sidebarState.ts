import { sidebarStateAction, sidebarActionTypes } from './types';

const initialState: boolean = false;

export const sidebarState = (
  state = initialState,
  action: sidebarStateAction
): boolean => {
  switch (action.type) {
    case sidebarActionTypes.UPDATE_SIDEBAR_STATE:
      return !state;
    default:
      return state;
  }
};
