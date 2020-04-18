import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthLayoutRoutes } from "./auth-layout.routing";
import { LoginComponent } from "../../pages/examples/login/login.component";
import { ConfirmacionComponent } from "../../pages/examples/confirmacion/confirmacion.component";
import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
import { LockComponent } from "../../pages/examples/lock/lock.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { JhipsterSharedLibsModule } from './shared-libs.module';
import { HasAnyAuthorityDirective } from '../../shared/auth/has-any-authority.directive';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    JhipsterSharedLibsModule,
    HasAnyAuthorityDirective,

    RouterModule.forChild(AuthLayoutRoutes),
  ],
  declarations: [
    HasAnyAuthorityDirective,
    LoginComponent,
    PricingComponent,
    LockComponent,
    RegisterComponent,
    ConfirmacionComponent
  ]
})

export class AuthLayoutModule {}
