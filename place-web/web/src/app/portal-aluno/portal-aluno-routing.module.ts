import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso-list/curso-list.component';
import { ProducaoComponent } from './producao/producao.component';
import { AtividadeComponent } from './atividades/atividade/atividade.component';

const routes: Routes = [
  { path: '', component: CursoListComponent },
  { path: 'curso/:id', component: ProducaoComponent },
  { path: 'curso/:id/atividade/:id', component: AtividadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAlunoRoutingModule { }
