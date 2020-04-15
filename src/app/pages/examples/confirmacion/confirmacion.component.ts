import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  focus;
  focus1;
  verPass = false

  constructor() { }

  ngOnInit() {
  }

}
