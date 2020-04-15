import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthLayoutRoutes } from "./auth-layout.routing";
import { LoginComponent } from "../../pages/examples/login/login.component";
import { ConfirmacionComponent } from "../../pages/examples/confirmacion/confirmacion.component";
import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
import { LockComponent } from "../../pages/examples/lock/lock.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    PricingComponent,
    LockComponent,
    RegisterComponent,
    ConfirmacionComponent
  ]
})
export class AuthLayoutModule {}
