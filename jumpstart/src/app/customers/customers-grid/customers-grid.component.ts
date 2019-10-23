import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/services/sorter.service';
import { TrackByService } from 'src/app/core/services/trackby.service';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersGridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  constructor(private sorterService: SorterService, public trackByService: TrackByService) {}

  ngOnInit() {}
  sort(prop: string) {
    this.sorterService.sort(this.customers, prop);
  }
}
