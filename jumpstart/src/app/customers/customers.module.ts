import { NgModule } from '@angular/core';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [SharedModule, CustomersRoutingModule],
  declarations: [CustomersRoutingModule.components]
})
export class CustomersModule {}
