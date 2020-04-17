import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
// import { MrsComponent } from '../../components/mrs/mrs.component';
import { RouterModule } from "@angular/router";
import { NegocioRoutes } from "./negocio.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule  } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { NegocioComponent } from './negocio.component';
import { SedesFormComponent } from './sedes-form/sedes-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HorariosComponent } from './horarios/horarios.component';
// import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    NegocioFormComponent,
    NegocioComponent,
    SedesFormComponent,
    HorariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MatExpansionModule,
    MatInputModule,
    MatTabsModule,
    // ComponentsModule,
    // NpnSliderModule,
    RouterModule.forChild(NegocioRoutes),
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MaterialFileInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule
    // NgbModule
  ]
})
export class NegocioModule { }
