import { Component, OnInit } from '@angular/core';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { FilterService } from '../core/services/filter.service';
import { LoggerService } from '../core/services/logger.service';

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2,
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  totalRecords = 0;
  pageSize = 10;

  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;
    this.getCustomersPage(1);
  }

  getCustomersPage(page: number) {
    this.dataService
      .getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe(
        (response: IPagedResults<ICustomer[]>) => {
          this.customers = this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => this.logger.log(err),
        () =>
          this.logger.log(
            `getCustomerPage() retrieved customers for page ${page}`
          )
      );
  }

  filterChanged(data: string) {
    if (data && this.customers) {
      data = data.toUpperCase();
      const props = ['firstName', 'lastName', 'city', 'state.name'];
      this.filteredCustomers = this.filterService.filter<ICustomer>(
        this.customers,
        data,
        props
      );
    } else {
      this.filteredCustomers = this.customers;
    }
  }
}
