import { Injectable, Inject } from '@angular/core';
import { IState, IOrder, ICustomer, IPagedResults, IApiResponse } from 'src/app/shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  customersBaseUrl = 'api/customers';
  ordersBaseUrl = 'api/orders';
  state: IState[];
  order: IOrder[];

  constructor(private http: HttpClient, @Inject('Window') window: Window) {}
  getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
    return this.http
      .get<ICustomer[]>(`${this.customersBaseUrl}`, {
        observe: 'response'
      })
      .pipe(
        map(res => {
          const totalRecords = +res.headers.get('X-InlineCount');
          const customers = res.body as ICustomer[];
          this.calculateCustomersOrder(customers);
          return {
            results: customers,
            totalRecords
          };
        }),
        catchError(this.handleError)
      );
  }
  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersBaseUrl).pipe(
      map(customers => {
        this.calculateCustomersOrder(customers);
        return customers;
      }),
      catchError(this.handleError)
    );
  }
  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.customersBaseUrl}/${id}`).pipe(
      map(customer => {
        this.calculateCustomersOrder([customer]);
        return customer;
      }),
      catchError(this.handleError)
    );
  }
  insertCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http
      .post<ICustomer>(this.customersBaseUrl, customer)
      .pipe(catchError(this.handleError));
  }
  updateCustomer(customer: ICustomer): Observable<boolean> {
    return this.http.put<IApiResponse>(`${this.customersBaseUrl}/${customer.id}`, customer).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }
  deleteCustomer(id: number): Observable<boolean> {
    return this.http.delete<IApiResponse>(`${this.customersBaseUrl}/${id}`).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }
  getStates(): Observable<IState[]> {
    return this.http.get<IState[]>('/api/states').pipe(catchError(this.handleError));
  }
  calculateCustomersOrder(customers: ICustomer[]) {
    for (const customer of customers) {
      if (customer && customer.orders) {
        let total = 0;
        for (const order of customer.orders) {
          total = total + order.itemCost;
        }
        customer.orderTotal = total;
      }
    }
  }
  private handleError(error: HttpErrorResponse) {
    console.error(`server error: ${error}`);
    if (error instanceof Error) {
      const errMsg = error.error.message;
      return throwError(errMsg);
    }
    return throwError(error);
  }
}
