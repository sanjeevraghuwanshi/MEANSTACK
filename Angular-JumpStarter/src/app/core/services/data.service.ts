import { Injectable } from "@angular/core";
import { CoreModule } from "../core.module";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ICustomer, IPagedResults } from "src/app/shared/interfaces";

import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: CoreModule
})
export class DataService {
  customersBaseUrl = "http://localhost:8080/api/jump/get";
  constructor(private _http: HttpClient) {}

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

  private handleError(error: HttpErrorResponse): Observable<Error> {
    console.error(`Server error : ${error}`);
    if (error.error instanceof Error) {
      const errMsg = error.error.message;
      return Observable.throw(errMsg);
    }
    return Observable.throw(error || "Node js server error");
  }
  getCustomersPage(
    page: number,
    pageSize: number
  ): Observable<IPagedResults<ICustomer[]> | Error> {
    return this._http
      .get<ICustomer[]>(`${this.customersBaseUrl}/page/${page}/${pageSize}`, {
        observe: "response"
      })
      .pipe(
        map(res => {
          const totalRecords = +res.headers.get("X-InlineCount");
          const customers = res.body as ICustomer[];
          this.calculateCustomersOrderTotal(customers);
          return {
            results: customers,
            totalRecords
          };
        }),
        catchError(this.handleError)
      );
  }

  getCustomers(): Observable<ICustomer[] | Error> {
    return this._http.get<ICustomer[]>(this.customersBaseUrl).pipe(
      map(customers => {
        this.calculateCustomersOrderTotal(customers);
        return customers;
      }),
      catchError(this.handleError)
    );
  }

  getCustomer(id: number): Observable<ICustomer | Error> {
    return this._http.get<ICustomer>(`${this.customersBaseUrl}/${id}`).pipe(
      map(customer => {
        this.calculateCustomersOrderTotal([customer]);
        return customer;
      }),
      catchError(this.handleError)
    );
  }
}
