import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { User } from './models/User';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private BASE_URL = environment.backendUrl;

  private currenUser: BehaviorSubject<User> = new BehaviorSubject(null);
  constructor(private _http:HttpClient, private router: Router) { }

  ngOnInit():void {
  }

  login(username, password) {
    this._http.post<void>(`${this.BASE_URL}/auth`, {"username" : username, "password" : password}, {withCredentials:true})
    .subscribe(() => this.router.navigate(['accueil/afficher']), error => this.router.navigate(['login']))
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
}
