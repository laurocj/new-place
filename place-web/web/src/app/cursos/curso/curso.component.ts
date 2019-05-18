import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../_service/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public id : number
  public titulo : string = '';
  public conteudo : string = '';

  constructor(private route: ActivatedRoute,private cursoService : CursoService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.cursoService.getById(id)
      .subscribe(curso => {this.curso = curso });
    }
  }

  set curso(curso : any){
    console.log(curso);
    this.id = curso['id'];
    this.titulo = curso['titulo'];
    this.conteudo = curso['conteudo'];
  }

  public save(){
    this.cursoService.save({titulo:this.titulo,conteudo: this.conteudo})
    .subscribe(
      res => this.id = res.id,
      error => console.log(error)
    );
  }

}
