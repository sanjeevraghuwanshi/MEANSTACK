import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>Hi i m child</div>
    <div>{{ count }}</div>
    <div>{{ person.name }}</div>
    <div *ngFor="let name of arr">{{ name }}</div>
  `
})
export class OnPushChildComponent {
  @Input() count: number;
  @Input() person: { name: string };
  @Input() arr: [];
}
