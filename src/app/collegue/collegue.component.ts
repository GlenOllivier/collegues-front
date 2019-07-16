import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input()
  public collegue:Collegue;
  public modificationEnCours:boolean;

  constructor() {
    this.modificationEnCours = false;
  }

  ngOnInit() {
  }

  public modifier() {
    this.modificationEnCours = true;
  }

  public creer() {
    console.log("Création d'un collègue");
  }

  public valider(value:any) {
    this.modificationEnCours = false;
    console.log(value);
  }
}
