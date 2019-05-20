import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { FieldConfig } from './models/field-config.interface';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { config } from 'rxjs';

const components = {
  button: FormButtonComponent,
  select: FormSelectComponent,
  input: FormInputComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: FieldConfig<any>;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      components[this.config.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.config;
    this.componentRef.instance.group = this.group;
  }
}
