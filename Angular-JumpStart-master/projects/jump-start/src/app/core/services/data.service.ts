import { Injectable } from '@angular/core';
import { IOrder, ICustomer, IState, IPagedResults } from '../../shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  customersBaseUrl = 'api/customers';
  ordersBaseUrl = 'api/orders';
  orders: IOrder[];
  customers: ICustomer[];
  states: IState[];

  constructor(private http: HttpClient) {}
  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersBaseUrl).pipe(
      map(customers => {
        this.calculateCustomersOrderTotal(customers);
        return customers;
      }),
      catchError(this.handleError)
    );
  }
  getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
    return this.http
      .get<ICustomer[]>(`${this.customersBaseUrl}/page/${page}/${pageSize}`, {
        observe: 'response'
      })
      .pipe(
        map(res => {
          const totalRecords = +res.headers.get('X-InlineCount');
          const customers = res.body as ICustomer[];
          this.calculateCustomersOrderTotal(customers);
          return {
            results: customers,
            totalRecords: totalRecords
          };
        }),
        catchError(this.handleError)
      );
  }

  calculateCustomersOrderTotal(customers: ICustomer[]) {
    for (const customer of customers) {
      if (customer && customer.orders) {
        let total = 0;
        for (const order of customer.orders) {
          total += order.itemCost;
        }
        customer.orderTotal = total;
      }
    }
  }

  handleError(error: HttpErrorResponse) {
    console.error('Server error : ', error);
    if (error.error instanceof Error) {
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}
