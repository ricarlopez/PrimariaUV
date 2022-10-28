import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-prueba',
  templateUrl: './lista-prueba.component.html',
  styleUrls: ['./lista-prueba.component.scss']
})
export class ListaPruebaComponent implements OnInit {
  @Input()

  dataSource:any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log();
  }

}
