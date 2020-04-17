import { Routes } from "@angular/router";
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { NegocioComponent } from './negocio.component';


export const NegocioRoutes: Routes = [
    {
        path: "",
        children: [
          {
            path: "components",
            component: NegocioComponent
          }
        ]
    },
];