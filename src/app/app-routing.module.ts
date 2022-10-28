import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'categorias',
  loadChildren: ()=>
      import('./categorias/categorias.module')
      .then(m=>m.CategoriasModule)
},
{
  path:'',
  redirectTo:'categorias',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
