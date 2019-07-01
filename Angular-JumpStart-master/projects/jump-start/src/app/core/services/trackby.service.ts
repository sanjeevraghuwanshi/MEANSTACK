import { Injectable } from '@angular/core';
import { ICustomer, IOrder } from '../../shared/interfaces';

@Injectable()
export class TrackbyService {
  customer(index: number, customer: ICustomer) {
    return customer.id;
  }
  orders(index: number, order: IOrder) {
    return index;
  }
}
