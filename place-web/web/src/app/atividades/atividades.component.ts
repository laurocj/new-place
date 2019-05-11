import { Component, OnInit, Input ,OnChanges, SimpleChanges} from '@angular/core';
import { AtividadeService } from '../_service/atividade.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss']
})
export class AtividadesComponent implements OnInit ,OnChanges{

  @Input() editavel : boolean
  @Input() cursoId : number

  public atividades : Object[] = []


  constructor(private atividadeService : AtividadeService) { }

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

  public saveAtividade(atividade : Object) : void {
    console.log(atividade);
    atividade['curso'] = {id : this.cursoId};
    this.atividadeService.save(atividade)
    .subscribe(
      res => console.log(res),
      error => console.log(error)
    );;
  }

}
