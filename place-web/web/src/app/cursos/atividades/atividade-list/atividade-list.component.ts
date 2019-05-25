import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AtividadeService } from '../../../_service/atividade.service';
import { MatDialog } from '@angular/material';
import { AtividadeModalComponent } from '../atividade-modal/atividade-modal.component';

export interface DialogData {
  titulo: string;
  conteudo: string;
}

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls: ['./atividade-list.component.scss']
})
export class AtividadeListComponent implements OnInit {

  @Output() atividadesChange: EventEmitter<any[]> = new EventEmitter();
  @Input() atividades : any[]

  private atividade : any
  private novaAtividade : boolean

  constructor(public dialog: MatDialog) {
    this.limparAtividade();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  public openDialog(novaAtividade : boolean): void {
    this.novaAtividade = novaAtividade;
    const dialogRef = this.dialog.open(AtividadeModalComponent, {
      data: this.atividade
    });

    dialogRef.afterClosed().subscribe(atividade => {
      this.addAtividade(atividade);      
    });
  }

  public addAtividade(atividade: any){
    if(atividade != undefined) {
      if(this.atividades == undefined){
        this.atividades = [];
      }
      if(this.novaAtividade)
        this.atividades.push(atividade);
      this.onAtividadeChange();
    }
    
    this.limparAtividade();
  }

  public onAtividadeChange() : void {   
    this.atividadesChange.emit(this.atividades);
  }

  public removeAtividade(index : number) : void{
    this.atividades.splice(index,1);
    this.onAtividadeChange();
  }

  public editarAtividade(atividade:any){
    this.atividade = atividade;
    this.openDialog(false);
  }

  private limparAtividade() : void {
    this.atividade = {conteudo: null, titulo: null};
  }

}
