import { sandboxOf } from 'angular-playground';
import { CustomerDetailsComponent } from './customer-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DataService } from 'src/app/core/services/data.service';
import { MockDataService, getActivatedRouteWithParent } from 'src/app/shared/mocks';
import { ActivatedRoute } from '@angular/router';

const sandboxConfig = {
  imports: [SharedModule, CoreModule],
  providers: [
    { provide: DataService, useClass: MockDataService },
    {
      provide: ActivatedRoute,
      useFactory: () => {
        const route = getActivatedRouteWithParent([{ id: '1' }]);
        return route;
      }
    }
  ],
  label: 'Customer details component'
};
export default sandboxOf(CustomerDetailsComponent, sandboxConfig)
  .add('With a customer', {
    template: `<app-customer-details></app-customer-details>`
  })
  .add('Without a customer', {
    template: `<app-customer-details></app-customer-details>`,
    providers: [
      {
        provide: ActivatedRoute,
        useFactory: () => {
          const route = getActivatedRouteWithParent([{ id: '1' }]);
          return route;
        }
      }
    ]
  });
