import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './layout/privado/contacto/contacto.component';
import { HorariosComponent } from './layout/privado/horarios/horarios.component';
import { LicenciasComponent } from './layout/privado/licencias/licencias.component';
import { PermisosComponent } from './layout/privado/permisos/permisos.component';
import { PrincipalComponent } from './layout/privado/principal/principal.component';
import { ProcesosComponent } from './layout/privado/procesos/procesos.component';
import { LoginComponent } from './layout/publico/login/login.component';
import { RegistrarseComponent } from './layout/publico/registrarse/registrarse.component';


//Rutas de navegacion
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: PrincipalComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'procesos', component: ProcesosComponent},
  {path: 'procesos/licencias', component: LicenciasComponent},
  {path: 'procesos/permisos', component: PermisosComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'register', component: RegistrarseComponent},
  {path: '**', redirectTo: 'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
