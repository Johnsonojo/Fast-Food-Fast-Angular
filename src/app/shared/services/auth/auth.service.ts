import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpMethods } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}

  onLogin(email, password) {
    const endpoint = 'auth/login';
    const { POST } = HttpMethods;
    return this.http.makeRequestWithData(endpoint, { email, password }, POST);
  }

  onSignup(username, email, password, confirmPassword) {
    const endpoint = 'auth/signup';
    const { POST } = HttpMethods;
    return this.http.makeRequestWithData(
      endpoint,
      { username, email, password, confirmPassword },
      POST,
    );
  }
}
