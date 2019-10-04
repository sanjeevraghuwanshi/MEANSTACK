import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

Injectable();
export class EventBusService {
  subject = new Subject<any>();
  constructor() {}
  on(event: Events, action: any): Subscription {
    return this.subject
      .pipe(
        filter((e: EmitEvent) => e.name === event),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
  }
  emit(event: EmitEvent) {
    this.subject.next(event);
  }
}
export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}
export enum Events {
  httpRequest,
  httpResponse
}
