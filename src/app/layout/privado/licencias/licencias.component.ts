import { Component } from '@angular/core';
import DocumentJson from "src/assets/json/datos.json";


@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css']
})
export class LicenciasComponent  {

  solicitud: any = DocumentJson;
  

}
