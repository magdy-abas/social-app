import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environment/environment.local';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}

  signUp(data: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'users/signup', data);
  }

  signIn(data: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'users/signin', data);
  }

  changePassword(): Observable<any> {
    return this._HttpClient.patch(
      environment.baseUrl + 'users/change-password',
      {}
    );
  }

  uploadUserImg(): Observable<any> {
    return this._HttpClient.put(environment.baseUrl + 'users/upload-photo', {});
  }

  getUserData(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + 'users/profile-data');
  }
}
