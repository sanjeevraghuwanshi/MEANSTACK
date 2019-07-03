import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from '../../../../../src/app/orders/orders-routing.module';

@NgModule({
  declarations: [OrdersRoutingModule.components],
  imports: [SharedModule, OrdersRoutingModule]
})
export class OrdersModule {}
