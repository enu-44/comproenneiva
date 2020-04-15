import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';

import { RouterModule } from "@angular/router";
import { NegocioRoutes } from "./negocio.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NegocioFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(NegocioRoutes),
    NgbModule
  ]
})
export class NegocioModule { }
