import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getTodos(): Promise<any> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError)
  }

  handleData(res: any): any {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for development purposes only
    return Promise.reject(error.message || error);
  }

}
