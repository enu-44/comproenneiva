import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutes } from "./auth-layout.routing";
import { LoginComponent } from "../../pages/examples/login/login.component";
import { ConfirmacionComponent } from "../../pages/examples/confirmacion/confirmacion.component";
import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
import { LockComponent } from "../../pages/examples/lock/lock.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HasAnyAuthorityDirective } from '../../shared/auth/has-any-authority.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(AuthLayoutRoutes),
    BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    // JhipsterSharedLibsModule,
    // HasAnyAuthorityDirective,
  ],
  declarations: [
    // HasAnyAuthorityDirective,
    LoginComponent,
    PricingComponent,
    LockComponent,
    RegisterComponent,
    ConfirmacionComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AuthLayoutModule {}
