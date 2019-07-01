import {
  Directive,
  ElementRef,
  Renderer,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  @Input('ccCardHover')
  config: any = {
    querySelector: '.card-text'
  }

  @HostBinding('class.card-outline-primary') private isHovering: boolean;
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover')
  onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, "display", "block");
    this.isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, "display", "none");
    this.isHovering = false;
  }

}
