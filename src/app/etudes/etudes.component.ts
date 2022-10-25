import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudes',
  templateUrl: './etudes.component.html',
  styleUrls: ['./etudes.component.css']
})
export class EtudesComponent implements OnInit {
  isAccueil?: boolean = true;

  change2019?: boolean;
  change2020?: boolean;
  change2021?: boolean;
  change2022?: boolean;
  change2023?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
