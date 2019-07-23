import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit, OnDestroy {
  public collegue;
  public modificationEnCours:boolean;
  public codeErreur:number = 200;
  public causesErreur:any = {};
  public isAdmin:boolean = false;

  public formData:Collegue = new Collegue();

  private abonnementCollegue:Subscription;

  constructor(private dataService: DataService, private authService:AuthService) {
    this.modificationEnCours = false;
  }

  ngOnInit() {
    this.abonnementCollegue = this.dataService.subCollegue()
    .subscribe(collegue => {
      this.collegue = collegue;
      this.formData = {...collegue};
      this.modificationEnCours = false;
    });
    this.authService.userSub().subscribe(user => this.isAdmin = user !== null && user.roles.includes("ROLE_ADMIN"));
  }

  ngOnDestroy(): void {
    this.abonnementCollegue.unsubscribe();
  }

  public modifier() {
    this.modificationEnCours = true;
  }

  public creer() {
  }

  public valider() {
    this.dataService.modifierCollegue(this.formData)
    .subscribe(collegue => {
      this.collegue = collegue;
      this.formData = {...collegue};
      this.modificationEnCours = false;
      this.codeErreur = 200;
      this.causesErreur = {};
    },
    (error:HttpErrorResponse) => {
      this.codeErreur = error.status;
      if (this.codeErreur === 400) {
        this.causesErreur = error.error;
      }
    });
  }

  public annuler() {
    this.formData = this.collegue;
    this.modificationEnCours = false;
    this.codeErreur = 200;
    this.causesErreur = {};
  }
}
