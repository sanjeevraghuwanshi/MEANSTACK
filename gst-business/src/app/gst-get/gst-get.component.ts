import { Component, OnInit } from "@angular/core";
import { Business } from "../business";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-gst-get",
  templateUrl: "./gst-get.component.html",
  styleUrls: ["./gst-get.component.scss"]
})
export class GstGetComponent implements OnInit {
  businesses: Business[];
  constructor(private _gstBusinessServeice: BusinessService) {}

  deleteBusiness(id) {
    this._gstBusinessServeice.deleteBusiness(id).subscribe(res => {
      console.log("Deleted");
    });
  }
  ngOnInit() {
    this._gstBusinessServeice
      .getBusinesses()
      .subscribe(businesses => (this.businesses = businesses.gst));
  }
}
