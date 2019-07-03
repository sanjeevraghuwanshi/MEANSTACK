import { Component, OnInit } from '@angular/core';
import { IOrder, ICustomer } from '../../shared/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'cm-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params.id;
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
    });
  }
  ordersTrackBy(index: number, orderItem: any) {
    return index;
  }
}
