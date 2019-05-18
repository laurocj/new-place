import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AtividadeService } from 'src/app/_service/atividade.service';
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

  @Input() editavel : boolean
  @Input() cursoId : number

  titulo: string;
  conteudo: string;


  public atividades : Object[] = []


  constructor(private atividadeService : AtividadeService,public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AtividadeModalComponent, {
      data: {conteudo: this.conteudo, titulo: this.titulo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      if(propName == 'cursoId' && chng.currentValue != undefined){
        this.getAtividades(this.cursoId);
      }
      
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
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

  public novaAtividade() : any{
    this.atividades.push(new Object);
  }

  public removeAtividade(index : number) : void{
    this.atividades.splice(index,1);
  }

  public salvarAtividade(atividade : Object) : void {
      atividade['curso'] = {id : this.cursoId};
      this.atividadeService.save(atividade)
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
  }


}
