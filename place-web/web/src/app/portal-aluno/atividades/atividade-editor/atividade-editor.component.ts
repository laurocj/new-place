import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtividadeService } from 'src/app/_service/atividade.service';
import { ProducaoService } from 'src/app/_service/producao.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-atividade-editor',
  templateUrl: './atividade-editor.component.html',
  styleUrls: ['./atividade-editor.component.scss']
})
export class AtividadeEditorComponent implements OnInit {

  public atividade : any
  public conteudo : String
  public matriculaId : number = 2;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50vh',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };


  constructor(
    private route: ActivatedRoute,
    private atividadeService : AtividadeService,
    private producaoService : ProducaoService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.atividadeService.getById(id)
      .subscribe(atividade => {console.log(atividade) 
        this.atividade = atividade;
      });
    }
  }

  public save() : any {
    var producao = { 
      conteudo : this.conteudo,
      atividade_id : this.atividade.id,
      matricula_id : this.matriculaId
    }
    this.producaoService.save(producao)
    .subscribe(
      res => {
        console.log(res);
      },
      error => console.log(error)
    );
  }

}
