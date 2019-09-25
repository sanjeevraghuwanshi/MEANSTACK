import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';
import { UserService } from './services';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService
  ) {}
  condition: boolean;
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(isAuthenticated => {
      if ((isAuthenticated && this.condition) || (!isAuthenticated && !this.condition)) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }
}
