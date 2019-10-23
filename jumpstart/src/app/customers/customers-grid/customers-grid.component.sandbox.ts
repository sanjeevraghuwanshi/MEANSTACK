import { sandboxOf } from 'angular-playground';
import { CustomersGridComponent } from './customers-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { customers } from 'src/app/shared/mocks';
const sandboxConfig = {
  imports: [SharedModule, CoreModule, RouterTestingModule],
  label: 'Customers grid component'
};
export default sandboxOf(CustomersGridComponent, sandboxConfig)
  .add('With many customers', {
    template: `<app-customers-grid [customers]='customers'></app-customers-grid>`,
    context: {
      customers
    }
  })
  .add('With 10 customers', {
    template: `<app-customers-grid [customers]='customers'></app-customers-grid>`,
    context: {
      customers: customers.slice(0, 10)
    }
  })
  .add('With 4 customers', {
    template: `<app-customers-grid [customers]='customers'></app-customers-grid>`,
    context: {
      customers: customers.slice(0, 4)
    }
  })
  .add('With no customers', {
    template: `<app-customers-grid ></app-customers-grid>`
  });
