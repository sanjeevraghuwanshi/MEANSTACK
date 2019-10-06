import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {
  promise: Promise<boolean>;
  message = 'Is it Ok?';
  confirm(message?: string) {
    if (message) {
      this.message = message;
    }
    this.promise = new Promise(this.resolver);
    return this.promise;
  }
  resolver(resolve: any) {
    return resolve(window.confirm('Is it Ok?'));
  }
}
