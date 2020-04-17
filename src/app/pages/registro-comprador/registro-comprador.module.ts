import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CompradorRoutes } from "./registro-comprador.routing";
import { RegistroCompradorFormComponent } from './registro-comprador-form/registro-comprador-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [RegistroCompradorFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CompradorRoutes),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class RegistroCompradorModule { }
