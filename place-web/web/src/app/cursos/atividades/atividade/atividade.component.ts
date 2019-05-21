import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {

  @Output() apagar = new EventEmitter();

  @Output() atividadeChange: EventEmitter<any> = new EventEmitter();
  @Input() atividade : any

  constructor() { }

  ngOnInit() {
  }

  public remove() : any {
    this.apagar.emit();
  }

  public save() : any {
    this.atividadeChange.emit(this.atividade);
  }

}
