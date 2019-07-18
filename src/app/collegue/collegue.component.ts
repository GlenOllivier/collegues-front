import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit, OnDestroy {
  public collegue;
  public modificationEnCours:boolean;

  public formData:Collegue = new Collegue();

  private abonnementCollegue:Subscription;

  constructor(private dataService: DataService) {
    this.modificationEnCours = false;
  }

  ngOnInit() {
    this.abonnementCollegue = this.dataService.subCollegue()
    .subscribe(collegue => {this.collegue = collegue;
      this.formData = {...collegue};});
  }

  ngOnDestroy(): void {
    this.abonnementCollegue.unsubscribe();
  }

  public modifier() {
    this.modificationEnCours = true;
  }

  public creer() {
    console.log("Création d'un collègue");
  }

  public valider() {
    this.dataService.modifierCollegue(this.formData)
    .subscribe(collegue => {
      this.collegue = collegue;
      this.formData = {...collegue};
    });
    this.modificationEnCours = false;
  }

  public annuler() {
    this.formData = this.collegue;
    this.modificationEnCours = false;
  }
}
