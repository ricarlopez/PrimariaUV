import { Component } from '@angular/core';
import { CategoriasService } from './services/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimariaUV';

  constructor(private categoriaService: CategoriasService) { 
    this.categoriaService.get().subscribe(categorias => {
      console.log(categorias);
    })
  }
}
