import { Routes } from '@angular/router';
import {modelsResolver} from "./resolvers/models.resolver";
import {configResolver} from "./resolvers/config.resolver";
import {stepOneGuard} from "./guards/step-one.guard";
import {stepTwoGuard} from "./guards/step-two.guard";

export const routes: Routes = [
  {
    path: 'models',
    loadComponent: () => import('./components/tesla-step-one/tesla-step-one.component').then((c) => c.TeslaStepOneComponent),
    resolve: {
      models: modelsResolver,
    }
  },
  {
    path: '',
    redirectTo: 'models',
    pathMatch: 'full'
  },
  {
    path: 'options/:codeModel',
    loadComponent: () => import('./components/tesla-step-two/tesla-step-two.component').then((c) => c.TeslaStepTwoComponent),
    resolve: {
      configs: configResolver
    },
    canActivate: [stepOneGuard]
  },
  {
    path: 'recap',
    loadComponent: () => import('./components/tesla-step-three/tesla-step-three.component').then((c) => c.TeslaStepThreeComponent),
    canActivate: [stepTwoGuard],
  }
];
