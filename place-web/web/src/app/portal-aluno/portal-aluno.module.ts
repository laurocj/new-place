import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalAlunoRoutingModule } from './portal-aluno-routing.module';
import { ProducaoComponent } from './producao/producao.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProducaoComponent,
    CursoListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    PortalAlunoRoutingModule
  ]
})
export class PortalAlunoModule { }
