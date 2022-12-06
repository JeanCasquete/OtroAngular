import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  public myForm!:FormGroup;
  constructor(private fb:FormBuilder,private registerprd:AutenticacionService, 
    private router:Router,private _snackBar: MatSnackBar) { }
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
      return this.error2();
    }   if(!this.registerprd.ingresarRegistro(this.myForm.value)) {
      this.error();
      
     }else {
      this.router.navigate(['/login']);
     }
  }

  error() {
    this._snackBar.open('Ingresa correctamente los datos', 'OK', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',

    }) 
  }
  error2() {
    this._snackBar.open('Llena todos los datos', 'OK', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',

    }) 
  }

}
