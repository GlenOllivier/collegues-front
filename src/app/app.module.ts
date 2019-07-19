import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueRechercheParNomComponent } from './collegue-recherche-par-nom/collegue-recherche-par-nom.component';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailsCollegueComponent } from './details-collegue/details-collegue.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component:GallerieComponent},
  { path: 'gallerie/:matricule', component: DetailsCollegueComponent},
  { path: 'apropos', component: AproposComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueRechercheParNomComponent,
    AjouterCollegueComponent,
    AccueilComponent,
    GallerieComponent,
    AproposComponent,
    DetailsCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
