import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit {
  isAccueil?: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
