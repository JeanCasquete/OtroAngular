import { Component } from '@angular/core';
import { AutenticacionService } from './shared/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEjemplo';
  constructor(private LoginPrd:AutenticacionService) {

  }

}
