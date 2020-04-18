import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CompradorRoutes } from "./registro-comprador.routing";
import { RegistroCompradorFormComponent } from './registro-comprador-form/registro-comprador-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
// import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [RegistroCompradorFormComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    
    RouterModule.forChild(CompradorRoutes),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class RegistroCompradorModule { }
