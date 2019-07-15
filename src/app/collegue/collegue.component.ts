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

  constructor() { }

  ngOnInit() {
  }

  public modifier() {
    console.log("Modification du collegue");
  }

  public creer() {
    console.log("Création d'un collègue");
  }
}
