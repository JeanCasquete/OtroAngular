import { group } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public myForm!:FormGroup;
private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb:FormBuilder,private Loginprd:AutenticacionService, private router:Router) { }
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
    alert("Ingresa un correo electronico");
   }else {
    this.router.navigate(['/home']);
   }
   
  }

}
