import { Routes } from "@angular/router";
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { NegocioComponent } from './negocio.component';
import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from 'src/app/core/auth/user-route-access-service';


export const NegocioRoutes: Routes = [
    {
        path: "",
        children: [
          {
            path: "components",
            component: NegocioComponent,
            data: {
              authorities: [Authority.USER],
              pageTitle: 'ElementoListas'
            },
            canActivate: [UserRouteAccessService]
          }
        ]
    },
];