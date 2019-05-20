import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './ad-banner/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './ad-banner/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';
import { HighlightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroModule } from './hero/hero.module';
import { View2Component } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    HighlightDirective,
    UnderlineDirective,
    NameEditorComponent,
    ProfileEditorComponent,
    View2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HeroModule],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
