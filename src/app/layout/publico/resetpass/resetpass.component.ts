import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {
  public myForm!:FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb:FormBuilder,
    private resetprd:AutenticacionService, 
    private router:Router,
    private _snackBar: MatSnackBar,
    private afAuth: AngularFireAuth) { }
  ngOnInit(): void {
    this.myForm=this.createMyForms();
  }

  private createMyForms():FormGroup {
    return this.fb.group({
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]]

    });

  }

  public submitFormulario(){
    if(this.myForm.invalid)
    {
     return this.error('llena todos los datos ');
    }else {
      const email = this.myForm.value.email;
      this.afAuth.sendPasswordResetEmail(email).then(()=>{

                this.Exitoso('Se envio la nueva contraseña a tu correo')
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }).catch((error)=> {
        this.error(this.resetprd.codeError(error.code))
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

  Exitoso(mensaje:string) {
    this._snackBar.open(mensaje, '',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass: ['blue-snackbar']
      
      

    }) 
    
  }
}
