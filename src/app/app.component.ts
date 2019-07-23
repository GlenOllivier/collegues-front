import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth-service';
import { User } from './models/User';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'collegues-front';
  user:User = null;

  constructor(private authService:AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.userSub().subscribe(user => this.user = user);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
