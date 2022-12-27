import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AngularFireModule} from '@angular/fire/compat'



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
import { environment } from 'src/environments/environment';
import { ResetpassComponent } from './layout/publico/resetpass/resetpass.component';
import { VerificacionComponent } from './layout/publico/verificacion/verificacion.component';
import {MatNativeDateModule} from '@angular/material/core';
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
    HorariosComponent,
    ResetpassComponent,
    VerificacionComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
