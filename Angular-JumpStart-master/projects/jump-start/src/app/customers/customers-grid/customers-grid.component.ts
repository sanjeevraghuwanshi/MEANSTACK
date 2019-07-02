import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/services/sorter.service';
import { TrackbyService } from '../../core/services/trackby.service';

@Component({
  selector: 'cm-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersGridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  constructor(private sorterService: SorterService, public trackByService: TrackbyService) {}

  ngOnInit() {}
  sort(prop: string) {
    this.sorterService.sort(this.customers, prop);
  }
}
