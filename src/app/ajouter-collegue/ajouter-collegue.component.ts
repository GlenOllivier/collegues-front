import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.css']
})
export class AjouterCollegueComponent implements OnInit {
  formData:Collegue = new Collegue();
  codeErreur:number = 200;
  causesErreur:any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  valider() {
    this.dataService.ajouterCollegue(this.formData)
    .subscribe(collegue => {
      this.dataService.postEtat(0);
      this.dataService.postCollegue(collegue);
      this.causesErreur = {};
    },
    (error:HttpErrorResponse) => {
      this.codeErreur = error.status;
      if(this.codeErreur === 400) {
        this.causesErreur = error.error;
      }
    });
  }

  annuler() {
    this.dataService.postEtat(0);
  }
}
