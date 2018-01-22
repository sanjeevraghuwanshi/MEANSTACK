import { AuthService } from "../auth.service";
import { LoginComponent } from "./login.component";

class MockAuthService extends AuthService {
    authenticated: boolean = false;

    isAuthenticated(): boolean {
        return this.authenticated;
    }
}

describe('Component: Login with mock service', () => {
    let component: LoginComponent;
    let service: MockAuthService;
    let realService: AuthService;
    let spy: any;
    let realComponent: LoginComponent;

    beforeEach(() => {
        service = new MockAuthService();
        component = new LoginComponent(service);

        realService = new AuthService();
        realComponent = new LoginComponent(realService);
    });

    afterEach(() => {
        component = null;
        service = null;

        realComponent = null;
        realService = null;
    });

    it('should return false when user is not authenticated', () => {
        service.authenticated = false;
        expect(component.needsLogin()).toBeTruthy();
    });


    it('should return true when user is authenticated', () => {
        service.authenticated = true;
        expect(component.needsLogin()).toBeFalsy();
    });

    it('needsLogin returns false when the user is not authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });


    it('needsLogin returns true when the user is authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });


});