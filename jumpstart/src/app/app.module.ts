import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from './notice/notice.component';
import { GrowlerComponent } from './core/growler/growler.component';
import { AboutComponent } from './about/about.component';
import { OnPushExComponent } from './on-push-ex/on-push-ex.component';

@NgModule({
  declarations: [AppComponent, NoticeComponent, GrowlerComponent, AboutComponent, OnPushExComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
