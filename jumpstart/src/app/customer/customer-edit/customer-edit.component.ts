import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomer, IState } from 'src/app/shared/interfaces';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { GrowlerService, GrowlerMessageType } from 'src/app/core/growler/growler.service';
import { ModalService, IModalContent } from 'src/app/core/modal/modal.servcie';
import { LoggerService } from 'src/app/core/services/logger.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer: ICustomer = {
    address: '',
    city: '',
    firstName: '',
    lastName: '',
    gender: '',
    id: 0,
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
    private growler: GrowlerService,
    private modalService: ModalService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params.id;
      if (id !== 0) {
        this.operationText = 'Update';
        this.getCustomer(id);
      }
    });
    this.dataService.getStates().subscribe((states: IState[]) => {
      this.states = states;
    });
  }
  getCustomer(id: number) {
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }
  submit() {
    if (this.customer.id !== 0) {
      this.dataService.insertCustomer(this.customer).subscribe(
        (insertedCustomer: ICustomer) => {
          if (insertedCustomer) {
            this.customerForm.form.markAsPristine();
            this.router.navigate(['/customers']);
          } else {
            const msg = 'Unable to insert customer';
            this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        (err: any) => this.logger.logError(err)
      );
    } else {
      this.dataService.updateCustomer(this.customer).subscribe(
        (status: boolean) => {
          if (status) {
            this.customerForm.form.markAsPristine();
            this.growler.growl('Operation performed successfull', GrowlerMessageType.Success);
          } else {
            const msg = 'Unable to update customer';
            this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        (err: any) => this.logger.logError(err)
      );
    }
  }
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }
  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.id).subscribe(
      (status: boolean) => {
        if (status) {
          this.router.navigate(['/customers']);
        } else {
          this.errorMessage = 'Unabme to delete customer';
        }
      },
      (err: any) => this.logger.log(err)
    );
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }
    const modalContent: IModalContent = {
      OKButtonText: 'Leave',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      header: 'Lose unsaved changes?'
    };
    return this.modalService.show(modalContent);
  }
}
