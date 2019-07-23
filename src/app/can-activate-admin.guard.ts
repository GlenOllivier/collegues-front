import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { map, catchError } from 'rxjs/operators';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminGuard implements CanActivate {

  constructor (private authService:AuthService, private router: Router){
  }
  
  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      map( (user:User) => user.roles.includes("ROLE_ADMIN")),
      catchError(error =>{
        this.router.navigate(['accueil']);
        throw error;
      })
    );
  }
  
}
