import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: 'tracker',
  //   loadChildren: () => import('tracker/Routes').then((m) => m!.remoteRoutes),
  //   outlet: 'timeTracker',
  // },
  // {
  //   path: 'calendar',
  //   loadChildren: () => import('calandar/Routes').then((m) => m!.remoteRoutes),
  // },
  // {
  //   path: 'time-management',
  //   loadChildren: () =>
  //     import('timeMangment/Routes').then((m) => m!.remoteRoutes),
  // },
  // {
  //   path: 'projects',
  //   loadChildren: () => import('projects/Routes').then((m) => m!.remoteRoutes),
  // },
  {
    path: 'hr',
    loadChildren: () => import('hr/Routes').then((m) => m?.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  }
];
