import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricule.mock';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collegue-recherche-par-nom',
  templateUrl: './collegue-recherche-par-nom.component.html',
  styleUrls: ['./collegue-recherche-par-nom.component.css']
})
export class CollegueRechercheParNomComponent implements OnInit {

  matricules:string[] = [];
  

  constructor(private dataService: DataService ) { }

  ngOnInit() {
  }

  recherche(name:string) {
    this.matricules = this.dataService.rechercheParNom(name);
  }

}
