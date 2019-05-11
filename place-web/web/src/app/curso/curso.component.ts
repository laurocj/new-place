import { Component, OnInit } from '@angular/core';
import { CursoService } from '../_service/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public id : number
  public titulo : string = '';
  public conteudo : string = '';

  constructor(private cursoService : CursoService) { }

  ngOnInit() {
  }

  public save(){
    this.cursoService.save({titulo:this.titulo,conteudo: this.conteudo})
    .subscribe(
      res => this.id = res.id,
      error => console.log(error)
    );
  }

}
