import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styles: [
  ]
})
export class ImgComponent implements OnInit {
  imagen:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
