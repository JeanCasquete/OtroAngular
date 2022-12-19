import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import xml2js from 'xml2js'; 
import { map } from 'rxjs/operators'



@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  items: any[]=[]; // Declaración de la variable "items"

  constructor() {
    this.getXMLData();
  }

  async getXMLData() {
    const response = await fetch('../assets/data.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    this.items = Array.from(xml.querySelectorAll('item')).map(item => {
      return {
        name: item.getAttribute('id'),
        label: item.textContent
        
      };
    });
  }
 
}