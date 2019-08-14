import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  authServiceSpy,
  resetSpies,
  httpServiceSpy,
  httpClientSpy,
} from 'src/app/helpers/tests/spies';
import { getSharedComponentImports } from 'src/app/helpers/tests/shared-imports';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../../config';
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
});
