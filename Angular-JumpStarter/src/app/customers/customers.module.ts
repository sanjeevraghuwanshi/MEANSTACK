import { NgModule } from '@angular/core';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';

@NgModule({
  imports: [SharedModule, CustomersRoutingModule],
  declarations: [
    CustomersComponent,
    CustomersCardComponent,
    CustomersGridComponent,
  ],
})
export class CustomersModule {}
