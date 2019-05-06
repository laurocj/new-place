import { Component, OnInit } from '@angular/core';
import { CursoService } from '../_service/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos : any[];

  constructor(private cursoService : CursoService) { }

  ngOnInit() {
    this.cursoService.getAll()
    .subscribe(
      cursos => this.cursos = cursos,
      error => console.log(error));
  }

}
