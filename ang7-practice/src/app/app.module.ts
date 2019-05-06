import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './ad-banner/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './ad-banner/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';
import { HighlightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    HighlightDirective,
    UnderlineDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  entryComponents:[HeroJobAdComponent,HeroProfileComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
