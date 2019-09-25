import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SharedModule,
  HeaderComponent,
  FooterComponent,
  ApiService,
  UserService,
  AuthGuard,
  JwtService,
  ProfileService
} from './shared';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule,
    ProfileModule,
    SettingsModule
  ],
  providers: [ApiService, UserService, AuthGuard, JwtService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
