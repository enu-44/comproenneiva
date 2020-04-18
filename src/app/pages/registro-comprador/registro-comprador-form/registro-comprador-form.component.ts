import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MapaUbicacionComponent } from '../../mapa-ubicacion/mapa-ubicacion.component'
import { MapaUbicacionService } from '../../mapa-ubicacion/mapa-ubicacion.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistroCompradorService } from '../registro-comprador.service';


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
      tipoDocumento: [null, Validators.required],
      noDocumento: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      primerNombre: [null, [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]],
      segundoNombre: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      primerApellido: [null, [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]],
      segundoApellido: [null, Validators.pattern('[a-zA-Z ]{2,254}')],
      departamento: [null, Validators.required],
      municipio: [null, Validators.required],
      ubicacion: [{value: null, disabled: true}, [Validators.pattern('[a-zA-Z ]{2,254}')]],
      direccion: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      telefonoOpcional: [null, Validators.pattern('^[0-9]*$')],
      terminos: [null, Validators.required],
      autorizo: [null]
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
        // dialogRef.close();
      }
    })
  }

  resultForm(compradorForm: FormGroup){
    let event = compradorForm.getRawValue();
    console.log('EVENT'+compradorForm);
    console.log(this.compradorForm)
  }

}