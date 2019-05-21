import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../_service/curso.service';
import { ActivatedRoute } from '@angular/router';
import { AtividadeService } from 'src/app/_service/atividade.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public id : number
  public titulo : string = '';
  public conteudo : string = '';
  public atividades : any[]

  constructor(
    private route: ActivatedRoute,
    private cursoService : CursoService,
    private atividadeService : AtividadeService) { }

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

  public getAtividades(cursoId : number) : void {
    this
    .atividadeService
    .getAll(cursoId)
    .subscribe(
      atividades => {console.log(atividades); this.atividades = atividades},
      error => console.log(error)
    )
  }

  public save(){
    console.log(this.atividades);
    // this.cursoService.save({titulo:this.titulo,conteudo: this.conteudo})
    // .subscribe(
    //   res => this.id = res.id,
    //   error => console.log(error)
    // );
  }

}
