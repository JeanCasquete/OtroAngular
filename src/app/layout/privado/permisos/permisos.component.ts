import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import DocumentJson from 'src/assets/json/datos.json';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css'],
})
export class PermisosComponent implements OnInit {
  @ViewChild('seleCa')
  select!: ElementRef;
  @ViewChild('seleNiv')
  select2!: ElementRef;
  @ViewChild('selePar')
  select3!: ElementRef;
  @ViewChild('selePer')
  select4!: ElementRef;

  items: any[] = []; // Declaración de la variable "items"
  public myForm!: FormGroup;
  dataUser: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private _snackBar: MatSnackBar
  ) {
    this.getXMLData();
  }

  ngOnInit(): void {
    this.myForm = this.createMyForms();
    this.afAuth.currentUser.then((user) => {
      if (user && user.emailVerified) {
        this.dataUser = user;
      } else {
        this.router.navigate(['./login']);
      }
    });
  }

  private createMyForms(): FormGroup {
    return this.fb.group({
      names: ['', [Validators.required]],
    });
  }

  validateSelections(): boolean {
    return (
      this.select.nativeElement.value !== '0' &&
      this.select2.nativeElement.value !== '0' &&
      this.select3.nativeElement.value !== '0' &&
      this.select4.nativeElement.value !== '0'
    );
  }

  public agregardato() {
    const nombre = this.myForm.value.names;
    const optionsCa = this.select.nativeElement.options;
    const carrera =
      optionsCa[this.select.nativeElement.selectedIndex].textContent;

    const optionsNiv = this.select2.nativeElement.options;
    const nivel =
      optionsNiv[this.select2.nativeElement.selectedIndex].textContent;

    const optionsPar = this.select3.nativeElement.options;
    const Paralelo =
      optionsPar[this.select3.nativeElement.selectedIndex].textContent;

    const optionsPer = this.select4.nativeElement.options;
    const Permiso =
      optionsPer[this.select4.nativeElement.selectedIndex].textContent;
    if (this.myForm.invalid) {
      return this.error('llena todos los datos ');
    } else if (this.validateSelections()) {
      this.afAuth.currentUser.then((user) => {
        console.log(nombre, carrera, nivel, Paralelo,Permiso, user?.email);
        this.afs.collection('Permisos').add({
          nombre: nombre,
          correo: user?.email,
          carrera: carrera,
          nivel: nivel,
          Paralelo: Paralelo,
          solicitud: Permiso,
          
        });
        this.error("Solicitud hecha correctamente")
      });
    } else {
      this.error('Seleciona una opcion para cada apartado');
    }
  }

  async getXMLData() {
    const response = await fetch('../assets/data.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    this.items = Array.from(xml.querySelectorAll('item')).map((item) => {
      return {
        name: item.getAttribute('id'),
        label: item.textContent,
      };
    });
  }

  logout() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  error(msj: string) {
    this._snackBar.open(msj, 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
