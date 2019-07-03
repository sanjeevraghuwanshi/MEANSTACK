import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  declarations: [CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
