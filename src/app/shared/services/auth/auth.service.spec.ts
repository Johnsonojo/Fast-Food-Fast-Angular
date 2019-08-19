import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  authServiceSpy,
  resetSpies,
  httpServiceSpy,
} from 'src/app/helpers/tests/spies';
import { getSharedComponentImports } from 'src/app/helpers/tests/shared-imports';
import { HttpService } from '../http/http.service';

describe('AuthService', () => {
  let service;

  beforeAll(() => resetSpies([authServiceSpy, httpServiceSpy]));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: getSharedComponentImports(),
      providers: [
        AuthService,
        { provide: HttpService, useValue: httpServiceSpy },
      ],
    });
    service = TestBed.get(AuthService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should fire login endpoint', () => {
    const data = {};
    service.onLogin(data);
    expect(httpServiceSpy.makeRequestWithData).toHaveBeenCalledTimes(1);
  });

  it('should fire signup endpoint', () => {
    const data = {};
    service.onSignup(data);
    expect(httpServiceSpy.makeRequestWithData).toHaveBeenCalledTimes(2);
  });
});
