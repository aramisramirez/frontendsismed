import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Opciones: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bruno Aramis Ramirez Melendez', weight: 1.0079, symbol: 'H', Opciones: 'dsds'}
];
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent {

  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor( private toastr: ToastrService, private router:Router, private usuarioService: UsuarioService) { }

  showToast(mensaje: string, titulo: string) {
    this.toastr.success(mensaje, titulo);
  }
  showToastError(mensaje: string, titulo: string) {
    this.toastr.error(mensaje, titulo);
  }
  ngOnInit(): void {
  }

  ListarTipoTitulo(){
    this.usuarioService.obtenerusuarioactivo().subscribe((response: any) => {
      let obtenemostoken: any;
      obtenemostoken = response.token;
    },(error: any) => {
      this.showToastError(error.error.message, 'Mensaje de error');
    });

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Opciones'];
  dataSource = ELEMENT_DATA;

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

}
