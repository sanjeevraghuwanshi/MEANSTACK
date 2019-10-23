import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule, // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule, // Main routes for application
    CoreModule, // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule, // Shared (multi-instance) objects
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
