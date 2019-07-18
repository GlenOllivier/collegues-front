import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'collegues-front';
  etat:number;
  subscription:Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.etat = 0;
    this.subscription = this.dataService.subEtat().subscribe(etat => this.etat = etat);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
