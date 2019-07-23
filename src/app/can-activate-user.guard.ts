import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth-service';
import { flatMap, map, catchError } from 'rxjs/operators';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class CanActivateUserGuard implements CanActivate {

  constructor (private authService:AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean>{
    return this.authService.getUser().pipe(
      map( (user:User) => user.roles.includes("ROLE_USER")),
      catchError(error =>{
        this.router.navigate(['login']);
        throw error;
      })
    );
  }
  
}
