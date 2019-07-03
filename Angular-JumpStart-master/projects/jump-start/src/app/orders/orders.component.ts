import { Component, OnInit } from '@angular/core';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { TrackbyService } from '../core/services/trackby.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cm-customers-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  customers: ICustomer[];
  totalRecords = 0;
  pageSize = 5;

  constructor(private dataService: DataService, private trackByService: TrackbyService) {}

  ngOnInit() {
    this.getCustomersPage(1);
  }
  pageChanged(page: number) {
    this.getCustomersPage(page);
  }
  getCustomersPage(page: number) {
    this.dataService
      .getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<ICustomer[]>) => {
        this.totalRecords = response.totalRecords;
        this.customers = response.results;
      });
  }
}
