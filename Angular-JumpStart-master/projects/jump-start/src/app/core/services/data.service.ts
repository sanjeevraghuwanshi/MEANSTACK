import { Injectable } from '@angular/core';
import { IOrder, ICustomer, IState, IPagedResults, IApiResponse } from '../../shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

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
  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.customersBaseUrl + '/' + id).pipe(
      map(customer => {
        this.calculateCustomersOrderTotal([customer]);
        return customer;
      }),
      catchError(this.handleError)
    );
  }
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
  getStates(): Observable<IState[]> {
    return this.http.get<IState[]>('/api/states').pipe(catchError(this.handleError));
  }

  insertCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http
      .post<ICustomer>(this.customersBaseUrl, customer)
      .pipe(catchError(this.handleError));
  }
  updateCustomer(customer: ICustomer): Observable<boolean> {
    return this.http.post<IApiResponse>(this.customersBaseUrl + '/' + customer.id, customer).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }
  deleteCustomer(id: number): Observable<boolean> {
    return this.http.delete<IApiResponse>(this.customersBaseUrl + '/' + id).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
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
