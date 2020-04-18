import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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

  tp: Opciones[] = [
    {value: 1, text: 'Natural'},
    {value: 2, text: 'Jurídica'}
  ];
  verInput: boolean = true;
  opcionSelected: any = 0;
  empresaForm: FormGroup;

  constructor(public dialog: MatDialog, 
    public serviceUbicacion: MapaUbicacionService,
    private formBuilder: FormBuilder) { }

  isLinear = false;
  dias: any [] = [];
  time = {hour: 13, minute: 30};

  ngOnInit() {
    this.empresaForm = this.returnEmpresaForm();
  }

  returnEmpresaForm(): FormGroup {
    return this.formBuilder.group({
      tipoEstablecimiento: [null, Validators.required],
      nombre: [null, [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]],
      tipoDocumento: [null, Validators.required],
      noDocumento: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      tipoPersona: [null, Validators.required],
      nombreCompleto: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      razonSocial: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      departamento: [null, Validators.required],
      municipio: [null, Validators.required],
      ubicacion: [{value: null, disabled: true}, [Validators.pattern('[a-zA-Z ]{2,254}')]],
      direccion: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      sitioWeb: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      telefono: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      telefonoOpcional: [null, Validators.pattern('^[0-9]*$')],
      camaraComercio: [null, Validators.required],
      noSedes: [null, Validators.pattern('^[0-9]*$')],
      servicios: [null, Validators.required],
      terminos: [null, Validators.required],
      autorizo: [null]
    })
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

  select(opcion){
    this.verInput = opcion===1?true:false;
    this.opcionSelected = opcion;
  }

  crearNegocio(empresaForm: FormGroup){
    console.log('DATA: ', this.empresaForm);
  }

}