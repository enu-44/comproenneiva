import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ProfileComponent } from "./profile/profile.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { MatButtonModule } from '@angular/material/button';

import { RouterModule } from "@angular/router";
import { ExamplesRoutes } from "./examples.routing";
// import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [ProfileComponent, TimelineComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    // MatExpansionModule,
    RouterModule.forChild(ExamplesRoutes),
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class ExamplesModule {}
