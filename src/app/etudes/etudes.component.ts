import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudes',
  templateUrl: './etudes.component.html',
  styleUrls: ['./etudes.component.css']
})
export class EtudesComponent implements OnInit {
  isAccueil?: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
