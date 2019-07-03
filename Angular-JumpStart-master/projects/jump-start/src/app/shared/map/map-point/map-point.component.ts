import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cm-map-point",
  templateUrl: ""
})
export class MapPointComponent implements OnInit {
  @Input() longitude: number;
  @Input() latitude: number;
  @Input() markerText: string;

  constructor() {}

  ngOnInit() {}
}
