import { LowerCasePipe } from '@angular/common';
import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-portfolio';
  cheminImageLinkedin:any = "../assets/images/linkedin.png";
  cheminImageGithub:any = "../assets/images/github.png";
  top:any;
  left:any;
  expand=false;
  isAccueil(){
    let str = window.location.pathname.substring(1,window.location.pathname.length);
    let arrayA = document.getElementsByClassName("aColor");
    let arrayB = document.getElementsByClassName("colorB");
    for (let idxA = 0; idxA < arrayA.length; idxA++){
      if (str.includes((arrayA[idxA].innerHTML.toLowerCase())) || arrayA[idxA].innerHTML.toLowerCase().includes(str)) { 
        arrayA[idxA].className = "colorB";
      } else {
        arrayA[idxA].className = "aColor";
      }
    }
    for (let idxB = 0; idxB < arrayB.length; idxB++){
      if (str.includes((arrayB[idxB].innerHTML.toLowerCase())) || arrayB[idxB].innerHTML.toLowerCase().includes(str)) { 
        arrayB[idxB].className = "colorB";
      } else {
        arrayB[idxB].className = "aColor";
      }
    }
    if (window.location.pathname.includes('accueil')){
      return false;
    }
    else {
      return true;
    }

  }
   
  @HostListener('document:click', ['$event'])
  onClick() {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; }) {
    this.top=($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
 }

}

