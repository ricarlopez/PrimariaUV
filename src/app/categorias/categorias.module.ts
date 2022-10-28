import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { AgregarEditarCategoriaComponent } from './agregar-editar-categoria/agregar-editar-categoria.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListadoCategoriasComponent, AgregarEditarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
