import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyPipe } from './my.pipe';
import { DefaultPipe } from './default.pipe';
import { LoginComponent } from './login/login.component';
import { HoverfocusDirective } from './hoverfocus.directive';
import { TestHoverFocusComponent } from './test-hover-focus/test-hover-focus.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    DefaultPipe,
    LoginComponent,
    HoverfocusDirective,
    TestHoverFocusComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
