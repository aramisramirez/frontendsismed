import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ADMINROUTES } from './admin.routes';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CitasComponent } from './citas/citas.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChatComponent } from './chat/chat.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import {MatSelectModule} from '@angular/material/select';
import { FormCitasMedicasComponent } from './form-citas-medicas/form-citas-medicas.component';

@NgModule({
  declarations: [
    AdminComponent,
    BienvenidaComponent,
    GestionUsuariosComponent,
    CitasComponent,
    ChatComponent,
    AyudaComponent,
    FormUsuarioComponent,
    FormCitasMedicasComponent
  ],
  imports: [
    CommonModule,
    ADMINROUTES,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatSelectModule
  ]
})
export class AdminModule { }
