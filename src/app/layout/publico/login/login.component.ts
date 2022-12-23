import { group } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireAuth} from '@angular/fire/compat/auth';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public myForm!:FormGroup;
private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb:FormBuilder,
    private Loginprd:AutenticacionService, 
    private router:Router,
    private _snackBar: MatSnackBar,
    private afAuth: AngularFireAuth) { }
  ngOnInit(): void {
    this.myForm=this.createMyForms();
  }
  private createMyForms():FormGroup {
    return this.fb.group({
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required]]

    });

  }

  public submitFormulario(){
   if(this.myForm.invalid)
   {
    return this.error('llena todos los datos ');
   }else {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.afAuth.signInWithEmailAndPassword(email,password).then((user)=>{
      console.log(user);
      if(user.user?.emailVerified) {
        this.error('Login exitoso');

      }else {
        
      }
      
    }).catch((error)=> {
      console.log(error);
      this.error(this.Loginprd.codeError(error.code))
    })
    
   }
   
  }

  error(msj: string) {
    this._snackBar.open(msj, 'Ok', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',

    }) 
  }

}
