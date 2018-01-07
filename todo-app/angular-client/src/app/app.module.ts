import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoService } from "./todo/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
