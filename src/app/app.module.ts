import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { PreinscritosComponent } from './preinscritos/preinscritos.component';
// import { CategoriasComponent } from './categorias/categorias/categorias.component';
// import { SharedComponent } from './shared/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    PreinscritosComponent,
    // CategoriasComponent,
    // SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
