import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  { path: 'chat', component: ChatComponent },
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
