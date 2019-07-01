import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../../shared/interfaces";

@Component({
  selector: "cm-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum: DisplayModeEnum;
  totalRecords = 0;
  pazeSize = 10;

  constructor() {}

  ngOnInit() {}
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
