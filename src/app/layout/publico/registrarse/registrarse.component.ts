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
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb:FormBuilder,private registerprd:AutenticacionService, 
    private router:Router,private _snackBar: MatSnackBar,private afAuth:AngularFireAuth) { }
  ngOnInit(): void {
    this.myForm=this.createMyForms();
  }
  private createMyForms():FormGroup {
    return this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required]],
      password2:['',[Validators.required]]


    });

  }

  
  public submitFormulario(){
    if(this.myForm.invalid)
    {
      return this.errorExiste('Llena los datos correctamente');
    } if(!this.registerprd.ingresarRegistro(this.myForm.value)) {
      return this.errorExiste('Las contraseñas deben ser iguales');    
     }else {
      const email =this.myForm.value.email;
      const password= this.myForm.value.password;
      this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=> {
        this.VerificarCorreo();

      }).catch((error)=>{
       this.errorExiste(this.registerprd.codeError(error.code)) 
      })      
     }
  }

  VerificarCorreo() {

    this.afAuth.currentUser.then(user=> user?.sendEmailVerification())
    .then(() => {
      this.Exitoso('Registro Exitoso')
      setTimeout(() => {
        this.router.navigate(['/verificacion']);
      }, 3000);
    }) 

    
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
