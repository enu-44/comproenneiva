import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from "@angular/router";
import { PresentationComponent } from "./presentation.component";
import { NavbarComponent } from '../components/navbar/navbar.component'
@NgModule({
  declarations: [
    PresentationComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    TooltipModule.forRoot(), 
    BsDropdownModule.forRoot(), 
    CollapseModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARIZgEvVm-isf97lDF5HmAwom6N7ftFg8'
    })
  ]
})
export class PresentationModule {}
