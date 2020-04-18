import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component'
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistroCompradorService } from '../registro-comprador.service';
import Swal from 'sweetalert2';

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
  compradorForm: FormGroup;

  opt: Opciones[] = [
    {value: 1, text: 'Opción 1'},
    {value: 2, text: 'Opción 2'},
    {value: 3, text: 'Opción 3'}
  ];

  dep: Opciones[] = [
    {value: 1153, text: 'Huila'}
  ];

  muni: Opciones[] = [
    {value: 1154, text: 'Neiva'},
    {value: 1155, text: 'Pitalito'}
  ];

  doc: Opciones[] = [
    {value: 1154, text: 'Cédula de ciudadanía'},
    {value: 1155, text: 'Cédula de Extranjería'}
  ];
  lat: any = 0;
  lng: any = 0;
  email: any;

  constructor(public dialog: MatDialog, 
    public serviceUbicacion: MapaUbicacionService,
    private formBuilder: FormBuilder,
    private service: RegistroCompradorService) { }

  ngOnInit() {
    this.compradorForm = this.returnCompradorForm();
    this.load();
  }

  load(){
    // this.service.listCompradores().subscribe((res: any)=>{
    //   console.log('RESPUESTA: ',res.body);
    // });
  }

  returnCompradorForm(): FormGroup {
    return this.formBuilder.group({
      tipoDocumentoId: [null, Validators.required],
      numDocumento: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]],
      segundoNombre: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]],
      segundoApellido: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      municipioId: [null, Validators.required],
      latitud: [this.lat],
      longitud: [this.lng],
      direccion: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      login: [this.email],
      celular1: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      celular2: [null, Validators.pattern('^[0-9]*$')],
      // terminos: [null, Validators.required],
      // autorizo: [null]
    })
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(MapaUbicacionComponent, {
      width: '800px',
      data: {name: this.name, animal: this.animal}
    });

    this.serviceUbicacion.puntoSeleccionado.subscribe((value:any)=> {
      if(value!=null){
        this.coords = value.lat+' - '+value.lng;
        this.lat = value.lat;
        this.lng = value.lng;
        // dialogRef.close();
      }
    })
  }

  onKey(event){
    this.email = event.target.value;
  }

  resultForm(compradorForm: FormGroup){
    let event = this.compradorForm.getRawValue();
    event.login = event.email;
    console.log(this.compradorForm)
    this.service.createComprador(event).subscribe((res:any)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
  
      Toast.fire({
        type: 'success',
        title: 'Usuario creado exitosamente'
      })
    },(error:any)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      
      Toast.fire({
        type: 'error',
        title: `Ha ocurrido un error!`
      })
    })
  }

}