import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterContentInit,
  Input
} from "@angular/core";

@Component({
  selector: "cm-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, AfterContentInit {
  private isEnabled: boolean;
  private isLoadingScript: boolean;
  private map: google.maps.Map;
  private markers: google.maps.Marker[] = [];

  mapHeight: string;
  mapWidhtL: string;

  @Input() latitude = 34.5133;
  @Input() longitude = -94.1629;
  @Input() markerText = "Your location";
  @Input() zoom = 8;
  @Input() height: number;
  @Input() width: number;

  @Input() get enabled(): boolean {
    return this.enabled;
  }

  set enabled(value: boolean) {
    this.isEnabled = value;
    this.inIt();
  }

  constructor() {}

  ngOnInit() {}

  inIt() {
    setTimeout(() => {
      this.ensureScript();
    }, 200);
  }

  ensureScript() {}
}
