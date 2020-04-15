import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';

import { RouterModule } from "@angular/router";
import { NegocioRoutes } from "./negocio.routing";

@NgModule({
  declarations: [NegocioFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(NegocioRoutes)
  ]
})
export class NegocioModule { }
