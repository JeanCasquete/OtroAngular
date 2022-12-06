import { group } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public myForm!:FormGroup;
private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
public message: string = '';


  constructor(private fb:FormBuilder,private Loginprd:AutenticacionService, private router:Router,private _snackBar: MatSnackBar) { }
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
    this.error();
    this.message="Error al ingresar los datos"
   }else {
    this.router.navigate(['/home']);
   }
   
  }

  error() {
    this._snackBar.open('Ingresa correctamente los datos', 'Ok', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',

    }) 
  }

}
