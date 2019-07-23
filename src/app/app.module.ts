import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { ConnexionComponent } from './connexion/connexion.component';
import { CanActivateUserGuard } from './can-activate-user.guard';
import { AuthService } from './auth-service';
import { CanActivateAdminGuard } from './can-activate-admin.guard';


const routes: Routes = [
  { path: '',redirectTo: '/accueil/afficher', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent, canActivate:[CanActivateUserGuard], children:[
    {path: '', redirectTo: 'afficher', pathMatch:'full'},
    {path: 'creer', component: AjouterCollegueComponent, canActivate:[CanActivateAdminGuard]},
    {path: 'afficher', component: CollegueComponent} 
  ] },
  { path: 'gallerie', component:GallerieComponent, canActivate:[CanActivateUserGuard]},
  { path: 'gallerie/:matricule', component: DetailsCollegueComponent, canActivate:[CanActivateUserGuard]},
  { path: 'apropos', component: AproposComponent, canActivate:[CanActivateUserGuard] },
  { path: 'login', component: ConnexionComponent }
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
    DetailsCollegueComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    ConnexionComponent
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
