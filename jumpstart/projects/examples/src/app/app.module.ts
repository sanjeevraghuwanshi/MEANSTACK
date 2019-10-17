import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnPushExComponent } from './on-push-ex/on-push-ex.component';
import { OnPushChildComponent } from './on-push-ex/on-push-child.component';

@NgModule({
  declarations: [AppComponent, OnPushExComponent, OnPushChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
