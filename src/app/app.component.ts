import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-portfolio';
  cheminImageLinkedin:any = "../assets/images/linkedin.png";
  cheminImageGithub:any = "../assets/images/github.png";

  isAccueil(){
    if (window.location.pathname.includes('accueil')){
      return false;
    }
    else {
      return true;
    }
  }
}
