import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  {
    path: 'producao',
    loadChildren: './portal-aluno/portal-aluno.module#PortalAlunoModule'
  },
  { path: 'chat', component: ChatComponent },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/gerenciar', component: UsuarioComponent },
  { path: 'usuarios/gerenciar/:id', component: UsuarioComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
