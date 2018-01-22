import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { exec } from 'child_process';

describe('Service : Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated method when there is token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });


  it('should return false from isAuthenticated method when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

});

// describe('AuthService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [AuthService]
//     });
//   });

//   it('should be created', inject([AuthService], (service: AuthService) => {
//     expect(service).toBeTruthy();
//   }));
// });
