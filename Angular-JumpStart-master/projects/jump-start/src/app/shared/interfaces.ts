export interface IUserLogin {
  email: string;
  password: string;
}

export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: IState;
  orders?: IOrder[];
  orderTotal?: number;
  latitude?: number;
  longitude?: number;
}

export interface IOrder {
  productName: string;
  itemCost: number;
}

export interface IState {
  abbreviation: string;
  name: string;
}
