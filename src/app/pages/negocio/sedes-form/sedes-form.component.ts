import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface DialogData {
  animal: string;
  name: string;
}

interface Opciones {
  value: number;
  text: string;
}

@Component({
  selector: 'sedes-form',
  templateUrl: './sedes-form.component.html',
  styleUrls: ['./sedes-form.component.scss']
})
export class SedesFormComponent implements OnInit {

  displayedColumns: string[] = ['departamento', 'municipio', 'direccion', 'correo', 'celular'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selectedTab: number = 0;
  coords: any = '0 - 0';
  panelOpenState = false;
  step = null;

  opt: Opciones[] = [
    {value: 1, text: 'Opción 1'},
    {value: 2, text: 'Opción 2'},
    {value: 3, text: 'Opción 3'}
  ];

  constructor(public dialog: MatDialog, public serviceUbicacion: MapaUbicacionService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectTab(){
    this.selectedTab=1;
  }

  setStep(index: number) {
    this.step = index;
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

export interface PeriodicElement {
  departamento: string;
  municipio: string;
  direccion: string;
  correo: string;
  celular: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'},
  {departamento: 'Huila', municipio: 'Neiva', direccion: 'Calle 10 # 2-56', correo: 'example@example.com', celular: '3111111111'}
];