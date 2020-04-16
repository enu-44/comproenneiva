import { Component, OnInit } from '@angular/core';
import Selectr from "mobius1-selectr";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MrsComponent } from '../../../components/mrs/mrs.component';
declare var $: any;

@Component({
  selector: 'app-negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.scss']
})
export class NegocioFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dias: any [] = [];
  time = {hour: 13, minute: 30};
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    var selectr: any = document.getElementById("selectr");
    var options = {};
    var optionsMultiple = { multiple: true };
    var selectrmultiple: any = document.getElementById("selectr-multiple");

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.dias.push(
      {
        nombre: 'lunes',
        jornadaContinua: false,
        continua: {
          jornada: 'jornada continua',
          activa: false,
          horaInicio: { hour: 0, minute: 0 },
          horaFin: { hour: 0, minute: 0 }
        },
        jornadas: [
          {
            jornada: 'mañana',
            activa: true,
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            jornada: 'tarde',
            activa: true,
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            jornada: 'noche',
            activa: true,
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      },
      {
        nombre: 'martes',
        jornadaContinua: true,
        continua: {
          jornada: 'jornada continua',
          activa: false,
          horaInicio: { hour: 6, minute: 0 },
          horaFin: { hour: 19, minute: 0 }
        },
        jornadas: [
          {
            jornada: 'mañana',
            activa: true,
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            jornada: 'tarde',
            activa: true,
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            jornada: 'noche',
            activa: true,
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      },
      {
        nombre: 'miercoles',
        jornadaContinua: false,
        continua: {
          jornada: 'jornada continua',
          activa: false,
          horaInicio: { hour: 0, minute: 0 },
          horaFin: { hour: 0, minute: 0 }
        },
        jornadas: [
          {
            jornada: 'mañana',
            activa: false,
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            jornada: 'tarde',
            activa: true,
            horaInicio: { hour: 13, minute: 0 },
            horaFin: { hour: 16, minute: 0 }
          },
          {
            jornada: 'noche',
            activa: true,
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      }
    )

  }
  // onSliderChange(selectedValues: number[]) {
  //   console.log('VALOR: ', selectedValues);
  // }

}
