import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.scss']
})
export class NegocioFormComponent implements OnInit {

  isLinear = false;
  selectedTab: number = 0;

  constructor() { }

  ngOnInit() {
    // var selectr: any = document.getElementById("selectr");
    // var options = {};
    // var optionsMultiple = { multiple: true };
    // var selectorDefault = new Selectr(selectr, options);
    // var selectrmultiple: any = document.getElementById("selectr-multiple");

    // var selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  onSliderChange(selectedValues: number[]) {
    console.log('VALOR: ', selectedValues);
  }

  selectTab(){
    this.selectedTab=1;
  }

}
