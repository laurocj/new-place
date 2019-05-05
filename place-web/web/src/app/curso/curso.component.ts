import { Component, OnInit } from '@angular/core';
import { CursoService } from '../_service/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public titulo : string = '';
  public conteudo : string = '';

  constructor(private cursoService : CursoService) { }

  ngOnInit() {
    this.cursoService.getAll()
    .subscribe(
      cursos => console.log(cursos),
      error => console.log(error));
  }

  public save(){
    this.cursoService.save({titulo:this.titulo,conteuto: this.conteudo})
    .subscribe(
      res => console.log(res),
      error => console.log(error));
    console.log(this.titulo,this.conteudo);
  }

}
