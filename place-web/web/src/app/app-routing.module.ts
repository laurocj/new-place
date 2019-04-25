import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  { path: '', component: CursoComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'curso', component: CursoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
