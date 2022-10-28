import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mesaje-confirmacion',
  templateUrl: './mesaje-confirmacion.component.html',
  styleUrls: ['./mesaje-confirmacion.component.scss']
})
export class MesajeConfirmacionComponent implements OnInit {
  mensaje!:string;
  textoAceptar='Si';

  constructor(
    public dialogRef:MatDialogRef<MesajeConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){
  }

  ngOnInit(): void {
    this.mensaje = this.data?.mensaje;
  }

  onNoClick():void{
    this.dialogRef.close();
  }
}
