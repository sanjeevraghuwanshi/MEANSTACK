import { Component, OnInit, Input } from '@angular/core';
import { Growl } from './growl';
import { GrowlerService, GrowlerMessageType } from './growler.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-growler',
  templateUrl: './growler.component.html',
  styleUrls: ['./growler.component.scss']
})
export class GrowlerComponent implements OnInit {
  private growlCount = 0;
  growls: Growl[] = [];
  @Input() position = 'bottom-right';
  @Input() timeout = 3000;

  constructor(private growlerService: GrowlerService, private loggerService: LoggerService) {
    this.growlerService.growl = this.growl.bind(this);
  }

  ngOnInit() {}
  growl(message: string, growlType: GrowlerMessageType): number {
    this.growlCount++;
    const bootStrapAlertType = GrowlerMessageType[growlType].toLowerCase();
    const messageType = `alert-${bootStrapAlertType}`;
    const growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
    this.growls.push(growl);
    return growl.id;
  }

  removeGrowl(id: number) {
    this.growls.forEach((growl: Growl, index: number) => {
      if (growl.id === id) {
        this.growls.splice(index, 1);
        this.growlCount--;
        this.loggerService.log(`removed ${id}`);
      }
    });
  }
}
