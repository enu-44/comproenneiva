import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HorariosComponent } from '../horarios/horarios.component'

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

  sedesForm: FormGroup;

  constructor(public dialog: MatDialog, 
    public serviceUbicacion: MapaUbicacionService,
    private formBuilder: FormBuilder) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.sedesForm = this.returnSedesForm();
    this.dataSource.paginator = this.paginator;
  }

  returnSedesForm(): FormGroup {
    return this.formBuilder.group({
      departamento: [null, Validators.required],
      municipio: [null, Validators.required],
      ubicacion: [{value: null, disabled: true}, [Validators.pattern('[a-zA-Z ]{2,254}')]],
      direccion: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      telefonoOpcional: [null, Validators.pattern('^[0-9]*$')],
      servicios: [null]
    })
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

  openDialogHorario(): void {
    const dialogRef = this.dialog.open(HorariosComponent, {
      width: '800px'
    });
  }

  resultForm(sedesForm: FormGroup){
    let event = sedesForm.getRawValue();
    console.log('EVENT'+sedesForm);
    console.log(this.sedesForm.value)
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