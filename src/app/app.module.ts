import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/publico/login/login.component';
import { PrincipalComponent } from './layout/privado/principal/principal.component';
import { ContactoComponent } from './layout/privado/contacto/contacto.component';
import { ProcesosComponent } from './layout/privado/procesos/procesos.component';
import { LicenciasComponent } from './layout/privado/licencias/licencias.component';
import { PermisosComponent } from './layout/privado/permisos/permisos.component';
import { RegistrarseComponent } from './layout/publico/registrarse/registrarse.component';
import { HorariosComponent } from './layout/privado/horarios/horarios.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ContactoComponent,
    ProcesosComponent,
    LicenciasComponent,
    PermisosComponent,
    RegistrarseComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
