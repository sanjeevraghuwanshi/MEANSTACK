import { Component, OnInit } from '@angular/core';
import { ICustomer, IPagedResults } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';
import { FilterService } from '../../core/services/filter.service';
import { LoggerService } from '../../core/services/logger.service';

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}

@Component({
  selector: 'cm-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pazeSize = 10;

  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.getCustomersPage(1);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pazeSize, this.pazeSize).subscribe(
      (response: IPagedResults<ICustomer[]>) => {
        this.customers = this.filteredCustomers = response.results;
        this.totalRecords = response.totalRecords;
      },
      (err: any) => this.loggerService.log(err),
      () => this.loggerService.log('getCustomersPage() retrieved customers for page: ' + page)
    );
  }

  filterChanged(data: string) {
    if (data && this.customers) {
      data = data.toUpperCase();
      const props = ['firstName', 'lastName', 'city', 'state.name'];
      this.filterService.filter<ICustomer>(this.customers, data, props);
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }
}
