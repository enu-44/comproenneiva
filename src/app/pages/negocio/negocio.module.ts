import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { RouterModule } from "@angular/router";
import { NegocioRoutes } from "./negocio.routing";

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NegocioFormComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatTabsModule,
    RouterModule.forChild(NegocioRoutes)
  ]
})
export class NegocioModule { }
