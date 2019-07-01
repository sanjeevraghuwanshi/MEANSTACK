import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import bootstrap from "bootstrap";
import { AppComponent } from "./app.component";
import { StudentComponent } from "./Student/student/student.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, StudentComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
