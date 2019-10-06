import { Injectable } from '@angular/core';
import { Propertyresolver } from './property-resolver';

@Injectable()
export class FilterService {
  filter<T>(items: T[], data: string, props: string[]) {
    return items.filter(item => {
      let match = false;
      for (const prop of props) {
        if (prop.indexOf('.') > 1) {
          const value = Propertyresolver.resolve(prop, item);
          if (value && value.toUpperCase().indexOf(data) > -1) {
            match = true;
            break;
          }
          continue;
        }
        if (
          item[prop]
            .toString()
            .toUpperCase()
            .indexOf(data) > -1
        ) {
          match = true;
          break;
        }
      }
      return match;
    });
  }
}
