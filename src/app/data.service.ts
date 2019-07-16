import { Injectable } from '@angular/core';
import { Collegue } from './models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues: Collegue[] = [
    new Collegue('Lef', 'André', 'Lef.André@gmail.com', new Date('1999-11-18'), "assets/images/keanu.png", 'c43e6721-bc51-40fa-b08d-9ec83daf3f6b'),
    new Collegue('Lef', 'Christine', 'Lef.Christine@gmail.com', new Date('1966-09-02'), "assets/images/keanu.png", 'a31bb2a8-c91e-4932-93c8-4d5f90551289'),
    new Collegue('Lef', 'Marcel', 'Lef.Marcel@gmail.com', new Date('1991-04-10'), "assets/images/keanu.png", '428ba7c9-686f-407c-98bd-a30902dffde8'),
    new Collegue('Lef', 'Marguerite', 'Lef.Marguerite@gmail.com', new Date('1996-08-25'), "assets/images/keanu.png", '19a64f21-53ba-468b-a608-4305cd604b16'),
    new Collegue('Lef', 'Sylvie', 'Lef.Sylvie@gmail.com', new Date('1996-04-01'), "assets/images/keanu.png", 'bdc985fc-07a9-4aaf-aeba-04388ec48bab'),
    new Collegue('Lef', 'Robert', 'Lef.Robert@gmail.com', new Date('1953-02-28'), "assets/images/keanu.png", '77db0464-a701-477a-ad39-99d98be549e5'),
    new Collegue('Lef', 'Christian', 'Lef.Christian@gmail.com', new Date('1959-07-01'), "assets/images/keanu.png", 'ec378e22-a2d5-4757-b131-aff4a596942e'),
    new Collegue('Lef', 'Isabelle', 'Lef.Isabelle@gmail.com', new Date('1950-12-11'), "assets/images/keanu.png", '412f193e-90e7-42f4-9ab5-7ed31b4b61d3'),
    new Collegue('Girard', 'Sylvie', 'Girard.Sylvie@gmail.com',  new Date('1995-01-24'),"assets/images/keanu.png", '2b7a133f-6417-4501-bb29-321bd472cb3d'),
    new Collegue('Girard', 'Pierre', 'Girard.Pierre@gmail.com',  new Date('1990-10-02'),"assets/images/keanu.png", '31a809f2-4c4f-4b4d-93ff-a6ca9bcd1692'),
    new Collegue('Girard', 'Madeleine', 'Girard.Madeleine@gmail.com',  new Date('1960-04-15'),"assets/images/keanu.png", '8f260a82-c07b-45f4-b800-8ab8fdc9d687'),
    new Collegue('Girard', 'Denise', 'Girard.Denise@gmail.com',  new Date('1990-01-25'),"assets/images/keanu.png", 'dbaab36f-239d-4bcc-924a-6a867c81ea7a'),
    new Collegue('Girard', 'Madeleine', 'Girard.Madeleine@gmail.com',  new Date('1991-09-23'),"assets/images/keanu.png", '062196cd-d4df-4a3e-a4ed-8af1b8894d66'),
    new Collegue('Girard', 'Isabelle', 'Girard.Isabelle@gmail.com',  new Date('1969-04-09'),"assets/images/keanu.png", '25e4fbc8-1203-44c6-be69-f4843c5dcee4'),
    new Collegue('Girard', 'Nicolas', 'Girard.Nicolas@gmail.com',  new Date('1991-03-14'),"assets/images/keanu.png", '9e120cb3-26d1-4171-b303-e7f33eea9a8a')
  ]

  constructor() { }

  rechercheParNom(nom: string): string[] {
    return this.collegues
      .filter(collegue => collegue.lastName === nom)
      .map(collegue => collegue.matricule);
  }

  recupererCollegueCourant():Collegue {
    return this.collegues[0];
  }
}
