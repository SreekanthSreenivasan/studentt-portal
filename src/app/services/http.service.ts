import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  isAuthenticates = new Subject<boolean>();
  isAuthSuccess = new BehaviorSubject<boolean>(false);

  login(username: string, password: string) {
    return this.http.get<any>(
      `api/students?username=${username}&password=${password}`
    );
  }

  isAuthenticated(authResult: boolean) {
    this.isAuthSuccess.next(authResult);
    // return authResult;
  }
}
