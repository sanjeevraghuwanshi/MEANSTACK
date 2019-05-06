import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  @Input() lineUnderline: string;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.textDecoration = this.lineUnderline
      ? 'underline'
      : 'overline';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.textDecoration = this.lineUnderline
      ? 'overline'
      : 'underline';
  }
}
