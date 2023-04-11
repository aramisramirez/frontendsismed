import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";

const authroutes: Routes =[
  {
    path:'auth', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent, pathMatch:'full'},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
];
export const AUTHROUTES = RouterModule.forChild(authroutes);
