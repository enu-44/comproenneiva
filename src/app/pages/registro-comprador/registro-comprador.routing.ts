import { Routes } from "@angular/router";
import { RegistroCompradorFormComponent } from './registro-comprador-form/registro-comprador-form.component';


export const CompradorRoutes: Routes = [
    {
        path: "",
        children: [
          {
            path: "components",
            component: RegistroCompradorFormComponent
          }
        ]
    },
];