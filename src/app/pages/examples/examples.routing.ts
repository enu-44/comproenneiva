import { Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

export const ExamplesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "timeline",
        component: TimelineComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "recuperar-contrasena",
        component: RecuperarContrasenaComponent
      }
    ]
  }
];
