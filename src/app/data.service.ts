import { Injectable } from '@angular/core';
import { Collegue } from './models/Collegue';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BACKEND_URL = environment.backendUrl;
  COLLEGUE = new Collegue("-----","-----", "-----", new Date("0001-01-01"), "assets/images/keanu.png", "-----");
  collegues = new Map<string, Collegue>();

  private subCollegueSelectionne = new BehaviorSubject<Collegue>(undefined);

  private subMode = new Subject<number>();

  constructor(private _http:HttpClient) { }

  rechercheParNom(nom: string): Observable<string[]> {
    this.collegues.clear();
    return this._http.get<string[]>(this.BACKEND_URL + "/collegues?nom=" + nom);
  }

  rechercheParMatricule(matricule:string): Observable<Collegue> {
    if (this.collegues.has(matricule)) {
      return of(this.collegues.get(matricule));
    }
    return this._http.get<Collegue>(this.BACKEND_URL + "/collegues/" + matricule)
    .pipe(tap(collegue => this.collegues.set(collegue.matricule, collegue)));
  }

  recupererCollegueCourant():Collegue {
    return this.COLLEGUE;
  }

  postCollegue(collegue:Collegue) {
    this.subCollegueSelectionne.next(collegue);
  }

  subCollegue(): Observable<Collegue> {
    return this.subCollegueSelectionne.asObservable();
  }

  modifierCollegue(collegue:Collegue): Observable<Collegue> {
    let collegueDto:any = {};

    if (collegue.pictureUrl !== "" && collegue.pictureUrl !== undefined) {
      collegueDto.pictureUrl = collegue.pictureUrl;
    }
    if (collegue.email !== "" && collegue.email !== undefined) {
      collegueDto.email = collegue.email;
    }
    this.collegues.clear();
    return this._http.patch<Collegue>(`${this.BACKEND_URL}/collegues/${collegue.matricule}`, collegueDto);
  }
  
  postEtat(etat:number) {
    this.subMode.next(etat);
  }

  subEtat(): Observable<number> {
    return this.subMode.asObservable();
  }

  ajouterCollegue(collegue:Collegue): Observable<Collegue> {
    return this._http.post<Collegue>(`${this.BACKEND_URL}/collegues`, collegue);
  }
}
