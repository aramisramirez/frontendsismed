
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
