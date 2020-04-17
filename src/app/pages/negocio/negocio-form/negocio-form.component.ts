import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component';


export interface DialogData {
  animal: string;
  name: string;
}

interface Opciones {
  value: number;
  text: string;
}

@Component({
  selector: 'negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.scss']
})
export class NegocioFormComponent implements OnInit {
  selectedTab: number = 0;
  coords: any = '0 - 0';

  opt: Opciones[] = [
    {value: 1, text: 'Opción 1'},
    {value: 2, text: 'Opción 2'},
    {value: 3, text: 'Opción 3'}
  ];

  constructor(public dialog: MatDialog, public serviceUbicacion: MapaUbicacionService) { }

  isLinear = false;
  dias: any [] = [];
  time = {hour: 13, minute: 30};

  ngOnInit() {
    // var selectr: any = document.getElementById("selectr");
    // var options = {};
    // var optionsMultiple = { multiple: true };
    // var selectrmultiple: any = document.getElementById("selectr-multiple");

    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });

    this.dias.push(
      {
        nombre: 'lunes',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      },
      {
        nombre: 'martes',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      },
      {
        nombre: 'miercoles',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      }
    )

  }

  eliminarHora(indexDia: number, indexJornada: number) {
    this.dias[indexDia].jornadas.splice(indexJornada, 1)
  }

  agregarJornada(indexDia) {
    this.dias[indexDia].jornadas.push(
      {
        horaInicio: { hour: 0, minute: 0 },
        horaFin: { hour: 0, minute: 0 }
      }
    )
  }
  // onSliderChange(selectedValues: number[]) {
  //   console.log('VALOR: ', selectedValues);
  // }

  selectTab(){
    this.selectedTab=1;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MapaUbicacionComponent, {
      width: '800px'
    });

    this.serviceUbicacion.puntoSeleccionado.subscribe((value:any)=> {
      if(value!=null){
        this.coords = value.lat+' - '+value.lng;
        // dialogRef.close();
      }
    })
  }

}