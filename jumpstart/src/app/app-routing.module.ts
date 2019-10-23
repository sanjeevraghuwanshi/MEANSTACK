import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/customers'
  },
  {
    path: 'customers/:id',
    data: { preLoad: true },
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'customers',
    loadChildren: `./customers/customers.module#CustomersModule`
  },
  {
    path: 'orders',
    data: { preLoad: true },
    loadChildren: `./orders/orders.module#OrdersModule`
  },
  {
    path: 'about',
    loadChildren: `./about/about.module#AboutModule`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadModulesStrategy })],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule {}
