import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  constructor(
    private http: HttpClient
  ) { }

  getProductos(){
    const datos = this.http.get<Producto[]>('http://localhost:3500/api/v1/productos')
    console.log(datos);
    return datos
  }
}
