import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso-list/curso-list.component';
import { ProducaoComponent } from './producao/producao.component';
import { AtividadeEditorComponent } from './atividades/atividade-editor/atividade-editor.component';

const routes: Routes = [
  { path: '', component: CursoListComponent },
  { path: 'curso/:id', component: ProducaoComponent },
  { path: 'curso/:id/atividade/:id', component: AtividadeEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAlunoRoutingModule { }
