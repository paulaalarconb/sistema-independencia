import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { InfoComunaComponent } from './core/info-comuna/info-comuna.component';
import { InfoUvComponent } from './core/info-uv/info-uv.component';
import { PersonaCrearComponent } from './core/persona-crear/persona-crear.component';
import { PersonaComponent } from './core/persona/persona.component';

import { QnaComponent } from './core/qna/qna.component';
import { QuienesSomosComponent } from './core/quienes-somos/quienes-somos.component';
import { VisComponent } from './core/vis/vis.component';
import { FarmaciaHomeComponent } from './farmacia/farmacia-home/farmacia-home.component';
import { InformesFarmaciaComponent } from './farmacia/informes-farmacia/informes-farmacia.component';
import { StockProductosComponent } from './farmacia/stock-productos/stock-productos.component';
import { VentaComponent } from './farmacia/venta/venta.component';
import { SeguridadHomeComponent } from './seguridad/seguridad-home/seguridad-home.component';

const routes: Routes = [
  // CORE
  {path:'',component:HomeComponent},
  {path:'quienes',component:QuienesSomosComponent},
  {path:'qna',component:QnaComponent},
  {path:'persona',component:PersonaComponent},
  {path:'persona/crear',component:PersonaCrearComponent},
  {path:'vis',component:VisComponent},
  {path: 'conoce-tu-area', component:InfoComunaComponent},
  {path: 'conoce-tu-uv', component:InfoUvComponent},

  // FARMACIA
  {path:'farmacia',component:FarmaciaHomeComponent},
  {path:'farmacia/informes',component:InformesFarmaciaComponent},
  {path:'farmacia/venta',component:VentaComponent},

  // STOCK
  {path:'stock',component:StockProductosComponent},

  // SEGURIDAD
  {path:'seguridad', component:SeguridadHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
