import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso-list/curso-list.component';
import { ProducaoComponent } from './producao/producao.component';

const routes: Routes = [
  { path: '', component: CursoListComponent },
  { path: 'producao/:id', component: ProducaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAlunoRoutingModule { }
