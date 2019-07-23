import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService, private authService:AuthService) { }

  ngOnInit() {

  }
  ngOnDestroy(): void {
  }

}
