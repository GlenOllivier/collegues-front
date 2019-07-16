import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricule.mock';

@Component({
  selector: 'app-collegue-recherche-par-nom',
  templateUrl: './collegue-recherche-par-nom.component.html',
  styleUrls: ['./collegue-recherche-par-nom.component.css']
})
export class CollegueRechercheParNomComponent implements OnInit {

  matricules = [];

  constructor() { }

  ngOnInit() {
  }

  recherche(name:string) {
    this.matricules = matriculesMock;
  }

}
