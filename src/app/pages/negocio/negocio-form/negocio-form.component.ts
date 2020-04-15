import { Component, OnInit } from '@angular/core';
import Selectr from "mobius1-selectr";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.scss']
})
export class NegocioFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    var selectr: any = document.getElementById("selectr");
    var options = {};
    var optionsMultiple = { multiple: true };
    // var selectorDefault = new Selectr(selectr, options);
    var selectrmultiple: any = document.getElementById("selectr-multiple");

    // var selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
