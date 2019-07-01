// tslint:disable: quotemark

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BusinessService } from "../business.service";
import { Business } from "../business";

@Component({
  selector: "app-gst-add",
  templateUrl: "./gst-add.component.html",
  styleUrls: ["./gst-add.component.scss"]
})
export class GstAddComponent implements OnInit {
  gstForm: FormGroup;
  createForm(): void {
    this.gstForm = this._formBuilder.group({
      personName: ["", Validators.required],
      businessName: ["", Validators.required],
      businessGstNumber: ["", Validators.required]
    });
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _businessService: BusinessService
  ) {
    this.createForm();
  }

  addBusiness(business: Business): void {
    this._businessService.addBusiness(business);
  }

  ngOnInit() {}
}
