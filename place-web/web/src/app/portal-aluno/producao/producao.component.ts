import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/_service/curso.service';

@Component({
  selector: 'app-producao',
  templateUrl: './producao.component.html',
  styleUrls: ['./producao.component.scss']
})
export class ProducaoComponent implements OnInit {

  public id : number
  public titulo : string = '';
  public conteudo : string = '';
  public atividades : any[]

  constructor(
    private route: ActivatedRoute,
    private cursoService : CursoService) { }

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
    this.atividades = curso['atividades'];
  }

  public save() {
    if(isNaN(this.id)) {
      this.cursoService.save({titulo:this.titulo,conteudo: this.conteudo , atividades:this.atividades})
      .subscribe(
        res => this.id = res.id,
        error => console.log(error)
      );
    } else {
      this.cursoService.update(this.id,{titulo:this.titulo,conteudo: this.conteudo , atividades:this.atividades})
      .subscribe(
        res => this.id = res.id,
        error => console.log(error)
      );
    }
  }

}
