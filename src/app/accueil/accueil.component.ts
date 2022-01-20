import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = "Accueil";

  cheminImageCompetences:any = "../../assets/images/competences.png";
  cheminImageEtudes:any = "../../assets/images/etudes.png";
  cheminImageProjets:any = "../../assets/images/projets.png";
  cheminImageLoisirs:any = "../../assets/images/loisirs.png";
  cheminImageContact:any = "../../assets/images/contact.png";
  cheminImageExperiences:any = "../../assets/images/experiences.png";
  showNavigationArrows = true;
  showNavigationIndicators = false;

  ngOnInit() {

  }
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
