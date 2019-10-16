import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { LoggerService } from 'src/app/core/services/logger.service';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CustomerEditComponent> {
  constructor(private logger: LoggerService) {}
  canDeactivate(
    component: CustomerEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.logger.log(`Customer id: ${currentRoute.parent.params['id']} URL: ${currentState.url}`);
    return component.canDeactivate();
  }
}
