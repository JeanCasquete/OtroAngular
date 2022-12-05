import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }

  private ingresar:boolean= false;
  

  //Validacion de registro contraseñas deben ser iguales
  public ingresarRegistro(obj:any):boolean {

      this.ingresar=obj.password==obj.password2
    return this.ingresar
  }

  public habilitarRegistro() {
    return this.ingresar

  }

}
