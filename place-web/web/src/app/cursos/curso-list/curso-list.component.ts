import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../_service/curso.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  public cursos : any[];

  displayedColumns: string[] = ['id', 'titulo','acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private cursoService : CursoService) { }

  ngOnInit() {
    this.cursoService.getAll()
    .subscribe(
      cursos => {
        this.cursos = cursos,
        this.dataSource = new MatTableDataSource<any>(cursos);},
      
      error => console.log(error));
  }
}
