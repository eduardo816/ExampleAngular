import { Component } from '@angular/core';
import { DatosService } from './servicios/datos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproyect';
  public  datos: any
  constructor(
    private datosService:DatosService
  ){}
  getAllDatos(){
    this.datosService.getDatos().subscribe((resp)=>{
      console.log(resp)
      this.datos = Object.values(resp)
    });
  }

}
