export interface phone {
  title: string;
  photos: string[];
  price: number;
  description: string;
  brand: string;
}

export interface sidebarStateAction {
  type: string;
}

export interface phoneAction {
  type: string;
  payload?: any;
}

export enum sidebarActionTypes {
  UPDATE_SIDEBAR_STATE = 'UPDATE_SIDEBAR_STATE',
}

export enum phonesActionType {
  FETCH_PHONES = 'FETCH_PHONES',
}
export enum cartActionType {
  ADD_ONE = 'ADD_ONE',
  MINUS_ONE = 'MINUS_ONE',
  ADD_MANY = 'ADD_MANY',
  MINUS_MANY = 'MINUS_MANY',
  RESTART_CART = 'RESTART_CART',
}

export interface fetchPhonesAction {
  type: phonesActionType.FETCH_PHONES;
  payload: phone;
}

export interface fetchCartAction {
  type: string;
  payload: number;
}

export type userAction = fetchPhonesAction;
export type cartAction = fetchCartAction;
