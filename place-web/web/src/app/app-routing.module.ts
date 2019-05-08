import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/gerenciar', component: CursoComponent },
  { path: 'cursos/gerenciar/{id}', component: CursoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
