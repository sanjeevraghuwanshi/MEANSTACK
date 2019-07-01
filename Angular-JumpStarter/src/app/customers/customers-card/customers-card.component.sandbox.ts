import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { sandboxOf } from 'angular-playground';
import { CustomersCardComponent } from './customers-card.component';
import { customers } from 'src/app/shared/mocks';

const sandboxConfig = {
  imports: [SharedModule, CoreModule, RouterTestingModule],
  lable: 'Customers card componet',
};

export default sandboxOf(CustomersCardComponent, sandboxConfig)
  .add('With many customers', {
    template: `<app-customers-card [customers]="customers"></app-customers-card>`,
    context: {
      customers,
    },
  })
  .add('With 10 customers', {
    template: `<app-customers-card [customers]="customers"></app-customers-card>`,
    context: {
      customers: customers.slice(0, 10),
    },
  })
  .add('With 4 customers', {
    template: `<app-customers-card [customers]="customers"></app-customers-card>`,
    context: {
      customers: customers.slice(0, 4),
    },
  })
  .add('With No customers', {
    template: `<app-customers-card></app-customers-card>`,
  });
