import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpMethods } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}

  onLogin(formData) {
    const endpoint = 'auth/login';
    const { POST } = HttpMethods;
    return this.http.makeRequestWithData(endpoint, formData, POST);
  }
}
