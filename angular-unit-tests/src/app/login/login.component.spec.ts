import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { User } from './login.component';

describe('Component Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let el: DebugElement;
  let el1: DebugElement;
  let passwordEl: DebugElement;
  let loginEl: DebugElement;
  let submitEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
    el = fixture.debugElement.query(By.css('.needsLogin'));
    el1 = fixture.debugElement.query(By.css('.needsUserLogin'));

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting enabled to false disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  })

  it('entering email and password emits loggedIn event', () => {
    let user: User;
    loginEl.nativeElement.value = "test@abc.com";
    passwordEl.nativeElement.value = "123456";

    component.loggedIn.subscribe((value) => {
      user = value;
    });

    submitEl.triggerEventHandler('click', null);

    expect(user.email).toBe('test@abc.com');
    expect(user.password).toBe('123456');
  });

  it('Button label by jasmine.done', (done) => {
    expect(el1.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el1.nativeElement.textContent.trim()).toBe('Login');

    const spy = spyOn(service, 'isUserAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(el1.nativeElement.textContent.trim()).toBe('Logout');
      expect(service.isUserAuthenticated).toHaveBeenCalled();
      done();
    });

  });


  xit('Button label by without jasmine.done', () => {
    expect(el1.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el1.nativeElement.textContent.trim()).toBe('Login');

    spyOn(service, 'isUserAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    fixture.detectChanges();
    expect(el1.nativeElement.textContent.trim()).toBe('Logout');
    expect(service.isUserAuthenticated).toHaveBeenCalled();
  });

  it('Button label by async and whenStable', async(() => {
    expect(el1.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el1.nativeElement.textContent.trim()).toBe('Login');

    spyOn(service, 'isUserAuthenticated').and.returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el1.nativeElement.textContent.trim()).toBe('Logout');
      expect(service.isUserAuthenticated).toHaveBeenCalled();

    });
    component.ngOnInit();
  }));

  it('Button label via fakeasync and tick()', fakeAsync(() => {
    expect(el1.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el1.nativeElement.textContent.trim()).toBe('Login');

    spyOn(service, 'isUserAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    tick();

    fixture.detectChanges();
    expect(el1.nativeElement.textContent.trim()).toBe('Logout');
    expect(service.isUserAuthenticated).toHaveBeenCalled();

  }));

  it('login button should be hidden when user is authenticated', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();

    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

  it('components login method return true when user is authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });


  it('components login method return false when user is not authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

});
