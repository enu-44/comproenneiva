import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { MrsComponent } from '../../components/mrs/mrs.component';
import { RouterModule } from "@angular/router";
import { NegocioRoutes } from "./negocio.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    NegocioFormComponent,
    MrsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    // NpnSliderModule,
    NgbModule,
    RouterModule.forChild(NegocioRoutes)
  ]
})
export class NegocioModule { }
