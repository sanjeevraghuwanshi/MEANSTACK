import { Component, OnInit } from "@angular/core";
import { Business } from "../business";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-gst-edit",
  templateUrl: "./gst-edit.component.html",
  styleUrls: ["./gst-edit.component.scss"]
})
export class GstEditComponent implements OnInit {
  business: any = {};
  gstForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bs: BusinessService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.gstForm = this.formBuilder.group({
      personName: ["", Validators.required],
      businessName: ["", Validators.required],
      businessGstNumber: ["", Validators.required]
    });
  }

  updateBusiness(business: Business, id) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(business, id);
      this.router.navigate(["business"]);
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusinesses(params["id"]).subscribe(res => {
        this.business = res.gst[0];
      });
    });
  }
}
