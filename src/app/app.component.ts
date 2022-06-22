import { Component } from '@angular/core';
import { Producto } from './interfaces/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  imageapp: string = "./assets/img/"

}
