import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component'
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';


export interface DialogData {
  animal: string;
  name: string;
}

interface Opciones {
  value: number;
  text: string;
}

@Component({
  selector: 'app-registro-comprador-form',
  templateUrl: './registro-comprador-form.component.html',
  styleUrls: ['./registro-comprador-form.component.scss']
})
export class RegistroCompradorFormComponent implements OnInit {
  animal: string;
  name: string;
  coords: any = '0 - 0';
  opt: Opciones[] = [
    {value: 1, text: 'Opción 1'},
    {value: 2, text: 'Opción 2'},
    {value: 3, text: 'Opción 3'}
  ];

  constructor(public dialog: MatDialog, public serviceUbicacion: MapaUbicacionService) { }

  ngOnInit() {
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(MapaUbicacionComponent, {
      width: '800px',
      data: {name: this.name, animal: this.animal}
    });

    this.serviceUbicacion.puntoSeleccionado.subscribe((value:any)=> {
      if(value!=null){
        this.coords = value.lat+' - '+value.lng;
        // dialogRef.close();
      }
    })
  }

}