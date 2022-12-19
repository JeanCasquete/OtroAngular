import { Component } from '@angular/core';
import DocumentJson from "src/assets/json/datos.json";

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
 tittle='horario';
 myimage:string='../assets/img/horarios.png';

 solicitud: any = DocumentJson;

}
