import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { ICustomer, IOrder } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: CoreModule,
})
export class TrackbyService {
  constructor() {}

  customer(index: number, customer: ICustomer) {
    return customer.id;
  }

  order(index: number, order: IOrder) {
    return index;
  }
}
