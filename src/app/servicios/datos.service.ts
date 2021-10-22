import { Injectable } from '@angular/core';

import {HttpClient} from'@angular/common/http';
import {Datos} from './../interfaces/datos';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  constructor(
    private http: HttpClient
  ) {
    console.log("Datoss")
   }
   getDatos(){
     const path= 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief';
     return this.http.get<Datos[]>(path);
     
  
    }
}
