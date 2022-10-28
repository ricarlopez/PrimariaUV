import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';

import { MesajeConfirmacionComponent } from 'src/app/shared/mesaje-confirmacion/mesaje-confirmacion.component';


@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.scss']
})
export class ListadoCategoriasComponent implements OnInit {
  //@Input()
  categorias:Categoria[]=[];
  displayedColumns: string[] = ['id', 'nombre','direccion','telefono','acciones'];

  constructor(private servicioCategorias: CategoriasService, private snackBar:MatSnackBar,private dialog:MatDialog
    ) { 
    this.servicioCategorias.get().subscribe(categorias => {
      console.log(categorias)
    })
    
  }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.servicioCategorias.get().subscribe(response => {
      this.categorias = response;
    });
  }

  eliminar(categoria:Categoria){

    const dialogRef = this.dialog.open(MesajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje:`¿Está segur@ que desea eliminar la categoría ${categoria.nombre}?`
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result==='Si'){

        this.servicioCategorias.delete(categoria.matricula)
        .subscribe((response)=>{                      
          this.snackBar.open('¡La categoría fue eliminada con éxito!','',{
            duration:3000
          });
          this.cargarCategorias();
        }) 

      }
    });
    
  }


}
