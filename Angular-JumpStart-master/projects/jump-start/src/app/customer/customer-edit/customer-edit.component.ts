import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomer, IState, IModalContent } from '../../shared/interfaces';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { LoggerService } from '../../core/services/logger.service';
import { GrowlerService, GrowlerMessageType } from '../../core/growler/growler.service';
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
  operationText = 'Insert';

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
        this.operationText = 'Update';
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

  submit() {
    if (this.customer.id === 0) {
      this.dataService.insertCustomer(this.customer).subscribe(
        (insertedCustomer: ICustomer) => {
          if (insertedCustomer) {
            this.customerForm.form.markAsPristine();
            this.router.navigate(['/customers']);
          } else {
            const msg = 'Unable to insert customer';
            this.growlerService.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        err => this.loggerService.log(err)
      );
    } else {
      this.dataService.updateCustomer(this.customer).subscribe(
        (status: boolean) => {
          if (status) {
            this.customerForm.form.markAsPristine();
            this.growlerService.growl(
              'peration performed successfully.',
              GrowlerMessageType.Success
            );
          } else {
            const msg = 'Unable to update customer';
            this.growlerService.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        err => this.loggerService.log(err)
      );
    }
  }
  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.id).subscribe(
      (status: boolean) => {
        if (status) {
          this.router.navigate(['/customers']);
        } else {
          this.errorMessage = 'Unable to delete customer';
        }
      },
      err => this.loggerService.log(err)
    );
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.form.dirty) {
      return true;
    }
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OkButtontext: 'Leave'
    };
    return this.modalService.show(modalContent);
  }
}
