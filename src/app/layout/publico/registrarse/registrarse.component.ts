import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  public myForm!:FormGroup;
  constructor(private fb:FormBuilder,private registerprd:AutenticacionService, private router:Router) { }
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
     return;
    }   if(!this.registerprd.ingresarRegistro(this.myForm.value)) {
      alert("Las contraseñas no son iguales")
      
     }else {
      this.router.navigate(['/login']);
     }
  }

}
