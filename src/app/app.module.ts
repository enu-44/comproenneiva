import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { TagInputModule } from "ngx-chips";
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationModule } from "./pages/presentation/presentation.module";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapaUbicacionComponent } from './pages/mapa-ubicacion/mapa-ubicacion.component';
import { AgmCoreModule } from '@agm/core';
import { JhipsterSharedModule } from './shared/shared.module';
import { JhipsterCoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule,
    NgbModule,

    JhipsterSharedModule,
    JhipsterCoreModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARIZgEvVm-isf97lDF5HmAwom6N7ftFg8'
    })
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, MapaUbicacionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
