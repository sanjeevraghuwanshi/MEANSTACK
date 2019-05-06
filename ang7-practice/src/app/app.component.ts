import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-banner/ad-item';
import { AdService } from './ad-banner/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  constructor(private adService: AdService) {}
  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
