import { GrowlerComponent } from './growler.component';

export class Growl {
  enabled: boolean;
  timeoutId: number;

  constructor(
    public id: number,
    public message: string,
    public messageType: string,
    private timeout: number,
    private growlerComponent: GrowlerComponent
  ) {}

  show() {
    window.setTimeout(() => {
      this.enabled = true;
      this.setTimeout();
    }, 0);
  }
  setTimeout() {
    window.setTimeout(() => {
      this.hide();
    }, this.timeout);
  }
  hide() {
    this.enabled = false;
    window.setTimeout(() => {
      this.growlerComponent.removeGrowl(this.id);
    }, this.timeout);
  }
}
