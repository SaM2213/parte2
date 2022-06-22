import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/interfaces/cliente';
import { Producto } from 'src/app/interfaces/producto';
import { ApiProductosService } from 'src/app/servicios/api-productos.service';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-funkos',
  templateUrl: './funkos.component.html',
  styles: [
  ]
})
export class FunkosComponent implements OnInit {
  public cliente:cliente=this.FunkoVacio();
  public lista: cliente[]=[];
  productos: Producto[] = [];

  miCarrito: Producto[] = [];
  valorCarrito: number = 0;

  constructor(
    private tiendaService: TiendaService, //inyector
    private apiProductosService: ApiProductosService
  ) {
    this.miCarrito = this.tiendaService.getMiCarrito();
   }
   FunkoVacio(): cliente{
    return{
      nombre: "",
      apellidos: "",
      email: "",
      Tarjeta:"",
      CVV:"",
      precio:0,
    };
  }

   onDatos(): void {
    this.lista.push(this.cliente);
    this.cliente= this.FunkoVacio();
   }

   ngOnInit(): void {
    this.apiProductosService.getProductos()
    .subscribe(data =>{
      //console.log(data);
      this.productos = data;
      console.log(this.productos);
    });
  }
  Vaciar(): void {
    this.miCarrito.splice(0, this.miCarrito.length);
   }



  onAgregarProducto(producto:Producto): void {
    console.log(producto.nombrefunko,"agregado");
    console.table(this.miCarrito);

    this.tiendaService.AgregarProducto(producto);
    this.valorCarrito = this.tiendaService.calcularValor();
  }
}
