import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.sass']
})
export class CarouselItemComponent implements OnInit {
  isActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
