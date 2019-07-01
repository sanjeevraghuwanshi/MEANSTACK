import { Injectable } from "@angular/core";
import { IOrder, ICustomer, IState } from "../../shared/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  customersBaseUrl = "api/customers";
  ordersBaseUrl = "api/orders";
  orders: IOrder[];
  customers: ICustomer[];
  states: IState[];

  constructor(private http: HttpClient) {}

  getCustomersPage() {}
}
