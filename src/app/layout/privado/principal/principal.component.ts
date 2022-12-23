import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  dataUser:any;

  constructor(private router: Router,
    private afAuth: AngularFireAuth) {}


  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified) 
      {
        this.dataUser = user;

      } else {
        this.router.navigate(['./login'])
      }
    })
    
  }
  

  logout() {
    this.afAuth.signOut().then(()=> this.router.navigate(['/login']))
  }
  navegar() {

    this.router.navigateByUrl('/procesos');
  }
  

 

}
