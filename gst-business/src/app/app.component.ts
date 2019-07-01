// tslint:disable: variable-name
// tslint:disable: quotemark

import { Component } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

import {
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "GST-Business";

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router
  ) {
    this._router.events.subscribe(event => {
      this.navigationInterceptor(event);
    });
  }
}
