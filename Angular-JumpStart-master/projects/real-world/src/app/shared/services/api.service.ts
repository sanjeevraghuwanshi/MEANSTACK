import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  private setHeaders(): HttpHeaders {
    const headersConfig = {
      ContentType: 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }
  private formatErrors(error: any): Observable<any> {
    return Observable.throw(error.json());
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const headers: HttpHeaders = this.setHeaders();
    // headers = headers.append('ContentType', 'application/json');
    // headers = headers.append('Accept', 'application/json');
    return this.http.get(`${environment.api_url}${path}`, { headers, params }).pipe(
      catchError(this.formatErrors),
      map(res => res.json())
    );
  }
  put(path: string, requestParams: Object = {}): Observable<any> {
    const headers: HttpHeaders = this.setHeaders();
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(requestParams), { headers })
      .pipe(
        catchError(this.formatErrors),
        map(res => res.json())
      );
  }
  post(path: string, requestParams: Object = {}): Observable<any> {
    const headers: HttpHeaders = this.setHeaders();
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(requestParams), { headers })
      .pipe(
        catchError(this.formatErrors),
        map(res => res.json())
      );
  }
  delete(path: string): Observable<any> {
    const headers: HttpHeaders = this.setHeaders();
    return this.http.delete(`${environment.api_url}${path}`, { headers }).pipe(
      catchError(this.formatErrors),
      map(res => res.json())
    );
  }
}
