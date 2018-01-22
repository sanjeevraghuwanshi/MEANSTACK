import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    component = new LoginComponent(authService);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    authService = null;
    component = null;
  });

  it('should return false when user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });


  it('should return true when user is authenticated', () => {
    localStorage.setItem('token', '1234');
    expect(component.needsLogin()).toBeFalsy();
  });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
