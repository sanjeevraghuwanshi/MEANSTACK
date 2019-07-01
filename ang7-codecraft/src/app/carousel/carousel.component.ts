import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  @ContentChildren(CarouselItemComponent)
  carouselItemList: QueryList<CarouselItemComponent>;


  @Input()
  delay: number = 500;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    let carouselList = this.carouselItemList.toArray();
    let count = 0;
    let max = carouselList.length;

    setInterval(() => {
      let i = count % max;
      carouselList.forEach((item) => {
        item.isActive = false;
      });

      carouselList[i].isActive = true;
      count++;
    }, this.delay);
  }

}
