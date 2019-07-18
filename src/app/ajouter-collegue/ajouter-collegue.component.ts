import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.css']
})
export class AjouterCollegueComponent implements OnInit {
  formData:Collegue = new Collegue();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  valider() {
    this.dataService.ajouterCollegue(this.formData)
    .subscribe(collegue => {
      this.dataService.postEtat(0);
      this.dataService.postCollegue(collegue);
    });
  }

  annuler() {
    this.dataService.postEtat(0);
  }
}
