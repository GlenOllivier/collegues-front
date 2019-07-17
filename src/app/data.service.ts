import { Injectable } from '@angular/core';
import { Collegue } from './models/Collegue';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BACKEND_URL = environment.backendUrl;
  COLLEGUE = new Collegue("-----","-----", "-----", new Date("0001-01-01"), "assets/images/keanu.png", "-----");
  collegues = new Map<string, Collegue>();
  private subCollegueSelectionne = new Subject<Collegue>();

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
}
