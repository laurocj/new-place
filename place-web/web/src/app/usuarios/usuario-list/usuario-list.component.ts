import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  public usuarios : any[];

  displayedColumns: string[] = ['id', 'nome','acoes'];
  dataSource = new MatTableDataSource<any>();
  
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getAll()
    .subscribe(
      usuarios => {
        this.usuarios = usuarios,
        this.dataSource = new MatTableDataSource<any>(usuarios);},
      
      error => console.log(error));
  }

}
