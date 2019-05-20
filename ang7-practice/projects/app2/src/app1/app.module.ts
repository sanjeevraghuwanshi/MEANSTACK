import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ],
})
export class AppModule {}
