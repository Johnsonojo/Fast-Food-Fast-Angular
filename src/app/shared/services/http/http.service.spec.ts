import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { HttpMethods, appConfig } from 'src/app/config';
import { getSharedComponentImports } from 'src/app/helpers/tests/shared-imports';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...getSharedComponentImports()],
    });
  });

  // service = TestBed.get(HttpService);
  // httpMock = TestBed.get(HttpTestingController);

  afterEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      backend.verify();
    },
  ));

  it('should send a login request as expected', () => {
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
    const endpoint = 'auth/login';
    const params = { username: 'example@stunt.com', password: 'notyourpass' };
    const { POST } = HttpMethods;
    service.makeRequestWithData(endpoint, params, POST).subscribe();

    const req = httpMock.expectOne(
      `https://fast-food-fast-20188.herokuapp.com/api/v1/auth/login`,
      'request to login endpoint',
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.url).toBe(
      'https://fast-food-fast-20188.herokuapp.com/api/v1/auth/login',
    );
    expect(req.request.body).toBe(params);
  });

  it('should make get request with users base url', () => {
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
    const url = 'auth/login';

    service.getRequest(url).subscribe((data: any) => {
      expect(data).toBe({});
    });

    const req = httpMock.expectOne(`${appConfig.base_url}auth/login`);
    expect(req.request.method).toBe('GET');
  });
});
