import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { User } from './models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private BASE_URL = environment.backendUrl;
  private user:User;
  constructor(private _http:HttpClient, private router: Router) { }

  ngOnInit():void {
  }

  login(username, password) {
    this._http.post<void>(`${this.BASE_URL}/auth`, {"username" : username, "password" : password}, {withCredentials:true})
    .subscribe(() => this.router.navigate(['accueil/afficher']), error => this.router.navigate(['login']))
  }

  getUser():Observable<User> {
    return this._http.get<User>(`${this.BASE_URL}/me`, {withCredentials:true}).pipe(
      tap(user => this.user = user)
    );
  }

  isAdmin() {
    return this.user.roles.includes("ROLE_ADMIN");
  }
}
