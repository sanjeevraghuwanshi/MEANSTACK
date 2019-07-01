// tslint:disable: quotemark

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Business } from "./business";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BusinessService {
  uri = "http://localhost:8080/api";

  constructor(private _http: HttpClient) {}

  addBusiness(business: Business): void {
    this._http
      .post(`${this.uri}/create`, business)
      .subscribe(res => console.log("Done"));
  }

  getBusinesses(): Observable<any> {
    return this._http.get(`${this.uri}/get`);
  }

  editBusinesses(id): Observable<any> {
    return this._http.get(`${this.uri}/get/${id}`);
  }

  updateBusiness(business: Business, id): void {
    this._http
      .put(`${this.uri}/update/${id}`, business)
      .subscribe(res => console.log("Done"));
  }

  deleteBusiness(id) {
    return this._http.get(`${this.uri}/remove/${id}`);
  }
}
