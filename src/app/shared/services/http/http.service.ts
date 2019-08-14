import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../../config';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  base_url = appConfig.base_url;

  constructor(private http: HttpClient) {}

  getRequest(endpoint) {
    return this.http.get(this.base_url + endpoint);
  }

  makeRequestWithData(endpoint, params, method) {
    return this.http[method](this.base_url + endpoint, params);
  }
}
