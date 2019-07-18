import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-collegue-recherche-par-nom',
  templateUrl: './collegue-recherche-par-nom.component.html',
  styleUrls: ['./collegue-recherche-par-nom.component.css']
})
export class CollegueRechercheParNomComponent implements OnInit {

  matricules: string[];
  codeErreur:number = 200;
  matriculeSelectionne: string = "";


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  recherche(name: string) {
    this.dataService.rechercheParNom(name)
      .subscribe(matriculesRecherches => {
        this.matricules = matriculesRecherches;
        this.dataService.postCollegue(undefined);
        this.matriculeSelectionne = "";
        this.codeErreur = 200;
      },
      (error:HttpErrorResponse) => {
        this.codeErreur = error.status;
      });
  }

  selectionner(matricule: string) {
    this.dataService.rechercheParMatricule(matricule).subscribe(collegue => {
      this.dataService.postCollegue(collegue);
      this.matriculeSelectionne = collegue.matricule;
      this.codeErreur = 200;
      this.dataService.postEtat(0);
    },
    (error:HttpErrorResponse) => {
      this.codeErreur = error.status;
    });
  }
}
