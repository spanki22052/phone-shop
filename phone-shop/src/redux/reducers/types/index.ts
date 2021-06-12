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

export interface fetchPhonesAction {
  type: phonesActionType.FETCH_PHONES;
  payload: phone;
}

export type userAction = fetchPhonesAction;
