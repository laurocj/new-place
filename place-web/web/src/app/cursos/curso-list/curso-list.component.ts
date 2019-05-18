import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../_service/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  public cursos : any[];

  constructor(private cursoService : CursoService) { }

  ngOnInit() {
    this.cursoService.getAll()
    .subscribe(
      cursos => this.cursos = cursos,
      error => console.log(error));
  }

}
