import { NgModule } from '@angular/core';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
  static components = [CustomersComponent, CustomersCardComponent, CustomersGridComponent];
}
