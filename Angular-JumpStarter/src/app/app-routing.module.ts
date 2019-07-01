import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { CrisisListComponent } from "./crisis-center/crisis-list/crisis-list.component";
// import { HeroListComponent } from "./heroes/hero-list/hero-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
