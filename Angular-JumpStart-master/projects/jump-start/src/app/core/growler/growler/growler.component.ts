import { Component, OnInit, Input } from "@angular/core";
import { GrowlerService, GrowlerMessageType } from "../growler.service";
import { LoggerService } from "../../services/logger.service";

@Component({
  selector: "cm-growler",
  templateUrl: "./growler.component.html",
  styleUrls: ["./growler.component.scss"]
})
export class GrowlerComponent implements OnInit {
  private growlCount = 0;
  growls: Growl[] = [];

  @Input() poistion = "bottom-right";
  @Input() timeout = 3000;

  constructor(
    private growlerService: GrowlerService,
    private loggerService: LoggerService
  ) {
    growlerService.growl = this.growl.bind(this);
  }

  ngOnInit() {}

  growl(message: string, growlType: GrowlerMessageType): number {
    this.growlCount++;
    const bootstrapAlertType = GrowlerMessageType[growlType].toLowerCase();
    const messgeType = `alert-${bootstrapAlertType}`;
    const growl = new Growl(
      this.growlCount,
      message,
      messgeType,
      this.timeout,
      this
    );
    this.growls.push(growl);
    return growl.id;
  }
  removeGrowl(id: number) {
    this.growls.forEach((growl: Growl, index: number) => {
      if (growl.id === id) {
        this.growls.splice(index, 1);
        this.growlCount--;
        this.loggerService.log("removed" + id);
      }
    });
  }
}

class Growl {
  enabled: boolean;
  timeoutId: number;

  constructor(
    public id: number,
    public message: string,
    public messgeType: string,
    public timeout: number,
    private growlerContainer: GrowlerComponent
  ) {
    this.show();
  }

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
      this.growlerContainer.removeGrowl(this.id);
    }, this.timeout);
  }
}
