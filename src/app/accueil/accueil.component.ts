import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {
  etat:number;
  subscription:Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.etat = 0;
    this.subscription = this.dataService.subEtat().subscribe(etat => this.etat = etat);

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
