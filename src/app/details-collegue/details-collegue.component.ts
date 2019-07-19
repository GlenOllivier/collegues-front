import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Collegue } from '../models/Collegue';
import { flatMap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.css']
})
export class DetailsCollegueComponent implements OnInit {

  collegue:Collegue;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
    flatMap(
      (params:ParamMap) => this.dataService.rechercheParMatricule(params.get('matricule'))
    ))
    .subscribe((collegue:Collegue) => this.collegue = collegue);
  }

}
