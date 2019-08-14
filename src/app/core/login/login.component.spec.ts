import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getSharedComponentImports } from 'src/app/helpers/tests/shared-imports';
import { of, throwError } from 'rxjs';
import {
  authServiceSpy,
  toasterServiceSpy,
  resetSpies,
} from 'src/app/helpers/tests/spies';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { queryAllByCss, queryByCss } from 'src/app/helpers/tests/utils';

import { ToastrManager } from 'ng6-toastr-notifications';

import { LoginComponent } from './login.component';
import { HeaderComponent } from '../header/header.component';
import { SpinnerComponent } from '../spinner/spinner.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockAuthService = {
    ...authServiceSpy,
    userError: of({}),
    dataUser: of({}),
  };

  beforeAll(() => resetSpies([authServiceSpy, toasterServiceSpy]));
  afterEach(() => resetSpies([authServiceSpy, toasterServiceSpy]));

  describe('DOM interaction', () => {
    let formDe;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [...getSharedComponentImports()],
        declarations: [LoginComponent, HeaderComponent, SpinnerComponent],
        providers: [
          { provide: AuthService, useValue: mockAuthService },
          { provide: ToastrManager, useValue: toasterServiceSpy },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(LoginComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
    }));

    beforeEach(() => {
      formDe = queryByCss(fixture, 'form');
      const [emailInput, passwordInput] = queryAllByCss(fixture, 'input').map(
        debugElement => debugElement.nativeElement,
      );

      emailInput.value = 'johndoe@mail.com';
      passwordInput.value = 'secret';
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('submits login form', () => {
      mockAuthService.onLogin.and.returnValue(of({}));
      formDe.triggerEventHandler('submit', null);
    });

    it('login throws error w/ message', () => {
      const error = {
        error: { message: 'Login not successful' },
      };
      mockAuthService.onLogin.and.returnValue(throwError(error));

      formDe.triggerEventHandler('submit', null);
      component.loginUser();
      expect(toasterServiceSpy.errorToastr).toHaveBeenCalledWith(
        error.error.message,
      );
    });
  });
});
