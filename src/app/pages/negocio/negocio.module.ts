import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { RouterModule } from "@angular/router";
import { NegocioRoutes } from "./negocio.routing";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NpnSliderModule } from "npn-slider";

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
    NpnSliderModule,
    RouterModule.forChild(NegocioRoutes),
    // NgbModule
  ]
})
export class NegocioModule { }
