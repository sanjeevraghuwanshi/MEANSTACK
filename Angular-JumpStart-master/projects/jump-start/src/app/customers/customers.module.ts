import { NgModule } from "@angular/core";

import { CustomersRoutingModule } from "./customers-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CustomersRoutingModule.components],
  imports: [SharedModule, CustomersRoutingModule]
})
export class CustomersModule {}