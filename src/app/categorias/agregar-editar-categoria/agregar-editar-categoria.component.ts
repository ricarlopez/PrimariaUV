import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-agregar-editar-categoria',
  templateUrl: './agregar-editar-categoria.component.html',
  styleUrls: ['./agregar-editar-categoria.component.scss']
})
export class AgregarEditarCategoriaComponent implements OnInit {
  formulario!:FormGroup;
  matricula!:number;

  constructor(private fb:FormBuilder, private servicioCategorias:CategoriasService, private router:Router,private snackBar:MatSnackBar,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['',  [Validators.required,Validators.minLength(5),Validators.maxLength(100)]  ],      
      direccion: ['',  [Validators.required,Validators.minLength(5),Validators.maxLength(100)]  ],
      telefono: ['',  [Validators.required,Validators.minLength(5),Validators.maxLength(100)]  ],
    });
    this.matricula = this.activatedRoute.snapshot.params['matricula'] ?
              +this.activatedRoute.snapshot.params['matricula'] : 0 ;
              
    if(this.matricula!==0){
      this.llenarDatosCategoria(this.matricula);
    }
  }

  llenarDatosCategoria(id:number){
    this.servicioCategorias.getById(id)
        .subscribe((categoria:Categoria)=>{
          this.formulario.patchValue({
            ...categoria
          })
    });
  }


  guardar(){
    const categoria: Categoria={
      ...this.formulario.value
    };
    if(this.matricula===0){
      this.agregar(categoria);
    }
    else{
      this.actualizar(this.matricula,categoria);
    }
  }
  
  agregar(categoria:Categoria){
    this.servicioCategorias.save(categoria).subscribe(response =>{
      this.snackBar.open('La categoria fue agregada exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/categorias']);
    })

  }

  actualizar(id:number,categoria:Categoria){
    this.servicioCategorias.update(id,categoria).subscribe(Response => {
      this.snackBar.open('La categoria a sido actualizada exitosamente','',{
        duration:3000
      })
      this.router.navigate(['/categorias/listado-categorias']);
    })
  }
  
 

  getControlFormulario=(valor:string) => this.formulario.get(valor);

  get nombre(){
	  return this.formulario.get('nombre');
  }

  get direccion(){
	  return this.formulario.get('direccion');
  }

  get telefono(){
	  return this.formulario.get('telefono');
  }
}