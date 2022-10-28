import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPruebaComponent } from './lista-prueba/lista-prueba.component';
//import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MesajeConfirmacionComponent } from './mesaje-confirmacion/mesaje-confirmacion.component';
//import { MesajeConfirmacionComponent } from './mesaje-confirmacion/mesaje-confirmacion.component';


@NgModule({
  declarations: [
    ListaPruebaComponent,
    MesajeConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    ListaPruebaComponent,
    MesajeConfirmacionComponent
  ]
})
export class SharedModule { }
