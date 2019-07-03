import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
const orderRoutes: Routes = [
  {
    path: '',
    component: OrdersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(orderRoutes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [OrdersComponent];
}
