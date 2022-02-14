import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  isAccueil?: boolean = true;
  iot?: boolean
  bang?: boolean
  commerce?: boolean
  html?: boolean
  waze?: boolean
  scrum?: boolean
  noissap?:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
