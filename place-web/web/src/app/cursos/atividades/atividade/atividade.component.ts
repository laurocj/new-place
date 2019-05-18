import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {

  @Output() atividade = new EventEmitter();

  @Output() deletar = new EventEmitter();

  public titulo : FormControl = new FormControl('');
  public conteudo : FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  public remove() : any {
    this.deletar.emit();
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
