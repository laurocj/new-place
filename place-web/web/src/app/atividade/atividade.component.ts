import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {

  @Output() atividade = new EventEmitter();
  public titulo : FormControl = new FormControl('');
  public conteudo : FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  public save() : any {
    this.atividade.emit(
      {
        titulo:this.titulo.value,
        conteudo: this.conteudo.value
      }
    );
  }

}
