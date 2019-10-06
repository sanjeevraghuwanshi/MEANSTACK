import { Injectable } from '@angular/core';
import { Propertyresolver } from './property-resolver';

@Injectable()
export class SorterService {
  property: string = null;
  direction = 1;
  sort(collection: any[], prop: any) {
    this.property = prop;
    this.direction = this.property === prop ? this.direction * -1 : 1;
    collection.sort((a: any, b: any) => {
      let aVal: any;
      let bVal: any;
      let returnedValue: any = 0;
      if (prop && prop.indexOf('.') > 1) {
        aVal = Propertyresolver.resolve(prop, a);
        bVal = Propertyresolver.resolve(prop, b);
      } else {
        aVal = a[prop];
        bVal = b[prop];
      }
      if (this.isString(aVal)) {
        aVal = aVal.trim().toUpperCase();
        bVal = bVal.trim().toUpperCase();
      }
      if (aVal === bVal) {
        returnedValue = 0;
      } else if (aVal > bVal) {
        returnedValue = this.direction * -1;
      } else {
        returnedValue = this.direction * 1;
      }
      return returnedValue;
    });
  }
  isString(val: any): boolean {
    return val && (typeof val === 'string' || val instanceof String);
  }
}
