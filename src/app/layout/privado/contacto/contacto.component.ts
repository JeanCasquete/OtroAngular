import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

 dataUser: any 
 
  constructor(private afAuth: AngularFireAuth,private router: Router,private _snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified) 
      {
        this.dataUser = user;

      } else {
        this.router.navigate(['./login'])
        this.error("Tienes que iniciar sesion para acceder a la pagina");
      }
    })
  }

  logout() {
    this.afAuth.signOut().then(()=> this.router.navigate(['/login']))
  }

  error(msj: string) {
    this._snackBar.open(msj, 'Ok', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',

    }) 
  }
    

}
