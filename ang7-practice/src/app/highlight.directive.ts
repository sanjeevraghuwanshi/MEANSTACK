import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() highlightColor: string;

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  constructor(private el: ElementRef) {}
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
