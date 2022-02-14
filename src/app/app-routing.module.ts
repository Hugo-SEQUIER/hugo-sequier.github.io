import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { EtudesComponent } from './etudes/etudes.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'etudes', component: EtudesComponent },
  { path: 'propos', component: LoisirsComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'experiences', component: ExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
