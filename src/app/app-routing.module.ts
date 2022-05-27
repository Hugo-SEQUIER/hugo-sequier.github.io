import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetComponent } from './projet/projet.component';
import { EtudesComponent } from './etudes/etudes.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'etudes', component: EtudesComponent },
  { path: 'propos', component: LoisirsComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'experiences', component: ExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
