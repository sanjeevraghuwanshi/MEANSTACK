import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'orders',
        component: CustomerOrdersComponent
      },
      {
        path: 'details',
        component: CustomerDetailsComponent
      },
      {
        path: 'edit',
        component: CustomerEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
  static components = [
    CustomerComponent,
    CustomerEditComponent,
    CustomerOrdersComponent,
    CustomerDetailsComponent
  ];
}
