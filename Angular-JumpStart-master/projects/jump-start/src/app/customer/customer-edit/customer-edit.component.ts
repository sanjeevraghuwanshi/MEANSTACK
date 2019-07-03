import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomer, IState } from '../../shared/interfaces';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { LoggerService } from '../../core/services/logger.service';
import { GrowlerService } from '../../core/growler/growler.service';
import { ModalService } from '../../core/modal/modal.service';

@Component({
  selector: 'cm-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer: ICustomer = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
      abbreviation: '',
      name: ''
    }
  };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  opeationText = 'Insert';

  @ViewChild('customerForm') customerForm: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private loggerService: LoggerService,
    private growlerService: GrowlerService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.opeationText = 'Update';
        this.getCustomer(id);
      }
    });
    this.getStates();
  }
  getStates() {
    this.dataService.getStates().subscribe((states: IState[]) => (this.states = states));
  }
  getCustomer(id: number) {
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }
}
