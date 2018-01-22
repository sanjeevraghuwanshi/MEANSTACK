import { ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { AuthService } from "../auth.service";
import { LoginComponent } from "./login.component";

class MockAuthService extends AuthService {
    authenticated: boolean = false;

    isAuthenticated(): boolean {
        return this.authenticated;
    }

    isUserAuthenticated(): string {
        return 'Mocked';
    }
}

describe('Component: Login with mock service', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let testBedService: AuthService;
    let componentService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AuthService]
        })

        TestBed.overrideComponent(
            LoginComponent,
            { set: { providers: [{ provide: AuthService, useClass: MockAuthService }] } }
        );
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        testBedService = TestBed.get(AuthService);

        componentService = fixture.debugElement.injector.get(AuthService);

    });

    afterEach(() => {
        component = null;
        fixture = null;
        testBedService = null;
        componentService = null;
    });

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([AuthService], (injectService: AuthService) => {
            expect(injectService).toBe(testBedService);
        })
    );

    it('Service injected via component should be and instance of MockAuthService', () => {
        expect(componentService instanceof MockAuthService).toBeTruthy();
    });


});