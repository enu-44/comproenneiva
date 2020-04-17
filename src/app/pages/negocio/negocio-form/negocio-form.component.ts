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
  isLinear = false;
  selectedTab: number = 0;
  coords: any = '0 - 0';

  opt: Opciones[] = [
    {value: 1, text: 'Opción 1'},
    {value: 2, text: 'Opción 2'},
    {value: 3, text: 'Opción 3'}
  ];

  constructor(public dialog: MatDialog, public serviceUbicacion: MapaUbicacionService) { }

  ngOnInit() { }

  onSliderChange(selectedValues: number[]) {
    console.log('VALOR: ', selectedValues);
  }

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