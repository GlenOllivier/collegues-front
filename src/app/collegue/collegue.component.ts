import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  public collegue;
  public modificationEnCours:boolean;

  constructor(private dataService: DataService) {
    this.modificationEnCours = false;
  }

  ngOnInit() {
    this.collegue = this.dataService.recupererCollegueCourant();
  }

  public modifier() {
    this.modificationEnCours = true;
  }

  public creer() {
    console.log("Création d'un collègue");
  }

  public valider() {
    this.modificationEnCours = false;
  }
}
