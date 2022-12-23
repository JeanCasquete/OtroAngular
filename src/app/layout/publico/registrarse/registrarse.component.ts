import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  public myForm!:FormGroup;
  constructor(private fb:FormBuilder,private registerprd:AutenticacionService, 
    private router:Router,private _snackBar: MatSnackBar,private afAuth:AngularFireAuth) { }
  ngOnInit(): void {
    this.myForm=this.createMyForms();
  }
  private createMyForms():FormGroup {
    return this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      password2:['',[Validators.required]]


    });

  }

  
  public submitFormulario(){
    if(this.myForm.invalid)
    {
      return this.errorExiste('Llena todos los datos');
    } if(!this.registerprd.ingresarRegistro(this.myForm.value)) {
      return this.errorExiste('Las contraseñas deben ser iguales');    
     }else {
      const email =this.myForm.value.email;
      const password= this.myForm.value.password;
      this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=> {
        this.Exitoso('Registro Exitoso')
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }).catch((error)=>{
       this.errorExiste(this.registerprd.codeError(error.code)) 
      })      
     }
  }

  errorExiste(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass: ['blue-snackbar']


    }) 
  }

  Exitoso(mensaje:string) {
    this._snackBar.open(mensaje, '',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass: ['blue-snackbar']
      
      

    }) 
    
  }

}
