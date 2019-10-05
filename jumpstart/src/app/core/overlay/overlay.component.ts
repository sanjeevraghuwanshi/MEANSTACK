import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService, Events } from '../services/event-bus.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, OnDestroy {
  @Input() dealy = 500;
  httpRequestSub: Subscription;
  httpResposeSub: Subscription;
  enabled = false;
  queue = [];
  timerId: number = null;
  timerHideId: number = null;

  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
    this.httpRequestSub = this.eventBus.on(Events.httpRequest, () => {
      this.queue.push({});
      if (this.queue.length === 1) {
        setTimeout(() => {
          if (this.queue.length) {
            this.enabled = true;
          }
        }, this.dealy);
      }
    });

    this.httpResposeSub = this.eventBus.on(Events.httpResponse, () => {
      this.queue.pop();
      if (this.queue.length === 1) {
        setTimeout(() => {
          if (this.queue.length === 0) {
            this.enabled = false;
          }
        }, this.dealy);
      }
    });
  }
  ngOnDestroy() {
    this.httpRequestSub.unsubscribe();
    this.httpResposeSub.unsubscribe();
  }
}
