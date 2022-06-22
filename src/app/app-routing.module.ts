import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { NostrosComponent } from './components/nostros/nostros.component';
import { LoginComponent } from './components/sesion/inicio.component';

const routes:Routes=[
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'home',
    component: InicioComponent
  },
  {
    path: 'nosotros',
    component: NostrosComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: 'sesion',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
