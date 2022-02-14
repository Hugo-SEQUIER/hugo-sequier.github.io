import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  isAccueil?: boolean = true;
  elem1?:boolean;
  elem2?:boolean;
  elem3?:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
