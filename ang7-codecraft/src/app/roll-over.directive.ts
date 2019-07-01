import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[ccRollOver]'
})
export class RollOverDirective {
  @Input('ccRollOver')
  config = {
    initial: 'https://unsplash.it/200/300?image=201',
    over: ''
  }

  @HostBinding('src')
  private imgPath: string;
  ngOnChanges() {
    if (!!this.config.initial) {
      this.imgPath = this.config.initial;
    }
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.imgPath = this.config.over;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.imgPath = this.config.initial;
  }
}
