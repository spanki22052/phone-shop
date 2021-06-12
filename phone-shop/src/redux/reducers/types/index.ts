export interface phone {
  title: string;
  photos: string[];
  price: number;
  description: string;
  brand: string;
}

export interface phoneAction {
  type: string;
  payload?: any;
}

export enum phonesActionType {
  FETCH_PHONES = 'FETCH_PHONES',
}

export interface fetchPhonesAction {
  type: phonesActionType.FETCH_PHONES;
  payload: phone;
}

export type userAction = fetchPhonesAction;
