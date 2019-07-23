import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.css']
})
export class AjouterCollegueComponent implements OnInit {
  formData:Collegue = new Collegue();
  codeErreur:number = 200;
  causesErreur:any = {};

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  valider() {
    this.dataService.ajouterCollegue(this.formData)
    .subscribe(collegue => {
      this.dataService.postCollegue(collegue);
      this.causesErreur = {};
      this.router.navigate(['afficher']);
    },
    (error:HttpErrorResponse) => {
      console.log(error.status);
      this.codeErreur = error.status;
      if(this.codeErreur === 400) {
        this.causesErreur = error.error;
      }
    });
  }

  annuler() {
    this.router.navigate(['accueil/afficher']);
  }
}
