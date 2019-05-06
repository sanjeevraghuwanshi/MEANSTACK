import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad.component';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  constructor() {}

  getAds() {
    return [
      new AdItem(HeroProfileComponent, { name: 'sam', bio: 'bravve' }),
      new AdItem(HeroProfileComponent, { name: 'ram', bio: 'brave' }),
      new AdItem(HeroJobAdComponent, {
        headline: 'samsam',
        body: 'bravsfsdfsdfsdfve',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'ttttt',
        body: 'bravsfsdfsdfsdfve',
      }),
    ];
  }
}
