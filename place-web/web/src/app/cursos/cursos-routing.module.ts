import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  { path: '', component: CursoListComponent },
  { path: 'gerenciar', component: CursoComponent },
  { path: 'gerenciar/:id', component: CursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
