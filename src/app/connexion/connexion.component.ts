import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formData:any = {username:"", password:""};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  connect() {
    this.authService.login(this.formData.username, this.formData.password);
  }
}
