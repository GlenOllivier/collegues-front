import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../environments/environment';
import { User } from './models/User';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private BASE_URL = environment.backendUrl;

  private currenUser: BehaviorSubject<User> = new BehaviorSubject(null);
  private loginError: Subject<string> = new Subject();
  constructor(private _http:HttpClient, private router: Router) { }

  ngOnInit():void {
  }

  login(username, password) {
    this.loginError.next(undefined);
    this._http.post<void>(`${this.BASE_URL}/auth`, {"username" : username, "password" : password}, {withCredentials:true})
    .subscribe(() => this.router.navigate(['accueil/afficher']), (error:HttpErrorResponse) => {
      switch(error.status) {
        case 401 :
          this.loginError.next("Identifiants incorrects");
          break;
        case 500 :
            this.loginError.next("Erreur interne au serveur");
            break;
        case 0 :
            this.loginError.next("Serveur injoignable");
            break;
      }
    })
  }

  logout() {
    this._http.get<void>(`${this.BASE_URL}/logout`, {withCredentials:true}).subscribe(
      () => this.currenUser.next(null), () => this.currenUser.next(null)
    );

  }

  getUser():Observable<User> {
    return this._http.get<User>(`${this.BASE_URL}/me`, {withCredentials:true}).pipe(
      tap(user => this.currenUser.next(user), error => this.currenUser.next(null))
    );
  }

  userSub() : Observable<User>{
    return this.currenUser.asObservable();
  }

  loginErrorSub():Observable<string> {
    return this.loginError.asObservable();
  }
}
