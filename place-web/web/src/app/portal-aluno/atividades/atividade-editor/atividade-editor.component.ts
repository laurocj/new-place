import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtividadeService } from 'src/app/_service/atividade.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-atividade-editor',
  templateUrl: './atividade-editor.component.html',
  styleUrls: ['./atividade-editor.component.scss']
})
export class AtividadeEditorComponent implements OnInit {

  @Output() apagar = new EventEmitter();

  @Output() atividadeChange: EventEmitter<any> = new EventEmitter();
  @Input() atividade : any



  constructor(
    private route: ActivatedRoute,
    private atividadeService : AtividadeService
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

  public remove() : any {
    this.apagar.emit();
  }

  public save() : any {
    this.atividadeChange.emit(this.atividade);
  }

}