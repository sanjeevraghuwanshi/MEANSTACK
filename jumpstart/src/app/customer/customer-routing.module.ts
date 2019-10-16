import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'orders', component: CustomerOrdersComponent },
      { path: 'details', component: CustomerDetailsComponent },
      {
        path: 'edit',
        component: CustomerEditComponent,
        canActivate: [CanActivateGuard],
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, CanDeactivateGuard]
})
export class CustomerRoutingModule {
  static components = [
    CustomerComponent,
    CustomerEditComponent,
    CustomerDetailsComponent,
    CustomerOrdersComponent
  ];
}
