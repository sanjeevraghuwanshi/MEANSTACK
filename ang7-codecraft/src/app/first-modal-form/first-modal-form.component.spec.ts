import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModalFormComponent } from './first-modal-form.component';

describe('FirstModalFormComponent', () => {
  let component: FirstModalFormComponent;
  let fixture: ComponentFixture<FirstModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
