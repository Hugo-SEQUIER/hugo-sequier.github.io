import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { CompetencesComponent } from './competences/competences.component';
import { EtudesComponent } from './etudes/etudes.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjetComponent } from './projet/projet.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CompetencesComponent,
    EtudesComponent,
    LoisirsComponent,
    ProjetComponent,
    ContactComponent,
    ExperiencesComponent,
    ProjetComponent,
    RealisationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
 

 }
