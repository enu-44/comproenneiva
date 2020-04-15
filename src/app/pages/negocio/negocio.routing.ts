import { Routes } from "@angular/router";
import { NegocioFormComponent } from './negocio-form/negocio-form.component';


export const NegocioRoutes: Routes = [
    {
        path: "",
        children: [
          {
            path: "components",
            component: NegocioFormComponent
          }
        ]
    },
];