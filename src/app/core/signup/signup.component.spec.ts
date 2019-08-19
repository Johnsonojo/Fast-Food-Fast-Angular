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
import { SignupComponent } from './signup.component';
import { HeaderComponent } from '../header/header.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ToastrManager } from 'ng6-toastr-notifications';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  const mockAuthService = {
    ...authServiceSpy,
    userError: of({}),
    dataUser: of({}),
  };

  beforeAll(() => resetSpies([authServiceSpy, toasterServiceSpy]));
  afterEach(() => resetSpies([authServiceSpy, toasterServiceSpy]));

  describe('DoM interaction', () => {
    let formDe;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [...getSharedComponentImports()],
        declarations: [SignupComponent, HeaderComponent, SpinnerComponent],
        providers: [
          { provide: AuthService, useValue: mockAuthService },
          { provide: ToastrManager, useValue: toasterServiceSpy },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(SignupComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
    }));

    beforeEach(() => {
      formDe = queryByCss(fixture, 'form');
      const [
        usernameInput,
        emailInput,
        passwordInput,
        confirmPasswordInput,
      ] = queryAllByCss(fixture, 'input').map(
        debugElement => debugElement.nativeElement,
      );

      usernameInput.value = 'johnson';
      emailInput.value = 'johndoe@mail.com';
      passwordInput.value = 'secret';
      confirmPasswordInput.value = 'secret';
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('submits signup form', () => {
      mockAuthService.onSignup.and.returnValue(of({}));
      formDe.triggerEventHandler('submit', null);
    });

    it('login throws error w/ message', () => {
      const error = {
        error: { message: 'Signup not successful' },
      };
      mockAuthService.onSignup.and.returnValue(throwError(error));

      formDe.triggerEventHandler('submit', null);
      component.signupUser();
      expect(toasterServiceSpy.errorToastr).toHaveBeenCalledWith(
        error.error.message,
      );
    });
  });
});
