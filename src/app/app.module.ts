import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueRechercheParNomComponent } from './collegue-recherche-par-nom/collegue-recherche-par-nom.component';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueRechercheParNomComponent,
    AjouterCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
