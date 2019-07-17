import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-collegue-recherche-par-nom',
  templateUrl: './collegue-recherche-par-nom.component.html',
  styleUrls: ['./collegue-recherche-par-nom.component.css']
})
export class CollegueRechercheParNomComponent implements OnInit {

  matricules:string[];

  matriculeSelectionne:string = "";
  

  constructor(private dataService: DataService ) { }

  ngOnInit() {
  }

  recherche(name:string) {
    this.dataService.rechercheParNom(name)
    .subscribe(matriculesRecherches => this.matricules = matriculesRecherches);
    return null;
  }

  selectionner(matricule:string) {
    this.dataService.rechercheParMatricule(matricule).subscribe(collegue => {
      this.dataService.postCollegue(collegue);
      this.matriculeSelectionne = collegue.matricule;
    });
  }
}
