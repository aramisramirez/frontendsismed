import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { CitasComponent } from './citas/citas.component';
import { ChatComponent } from './chat/chat.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormCitasMedicasComponent } from './form-citas-medicas/form-citas-medicas.component';

const authroutes: Routes =[
  {
    path:'admin', component: AdminComponent,
    children: [
      {path: 'bienvenida', component: BienvenidaComponent, pathMatch:'full'},
      {path: 'usuarios', component: GestionUsuariosComponent, pathMatch: 'full'},
      {path: 'citasmedicas', component: CitasComponent, pathMatch: 'full'},
      {path: 'citasgestion', component: FormCitasMedicasComponent, pathMatch: 'full'},
      {path: 'chatconsulta', component: ChatComponent, pathMatch: 'full'},
      {path: 'ayudasistema', component: AyudaComponent, pathMatch: 'full'},
      {path: 'formusuarios', component: FormUsuarioComponent, pathMatch: 'full'},
      { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
    ]
  },
];
export const ADMINROUTES = RouterModule.forChild(authroutes);
