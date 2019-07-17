import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueRechercheParNomComponent } from './collegue-recherche-par-nom/collegue-recherche-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueRechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}