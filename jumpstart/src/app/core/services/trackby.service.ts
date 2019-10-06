import { Injectable } from '@angular/core';
import { ICustomer, IOrder } from 'src/app/shared/interfaces';

@Injectable()
export class TrackByService {
  customer(index: number, customer: ICustomer) {
    return customer.id;
  }
  order(index: number, order: IOrder) {
    return index;
  }
}
