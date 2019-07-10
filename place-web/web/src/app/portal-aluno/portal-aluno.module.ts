import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalAlunoRoutingModule } from './portal-aluno-routing.module';
import { ProducaoComponent } from './producao/producao.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AtividadeListComponent } from './atividades/atividade-list/atividade-list.component';
import { AtividadeComponent } from './atividades/atividade/atividade.component';
import { AtividadeModalComponent } from './atividades/atividade-modal/atividade-modal.component';

@NgModule({
  declarations: [
    ProducaoComponent,
    CursoListComponent,
    AtividadeListComponent,
    AtividadeComponent,
    AtividadeModalComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    PortalAlunoRoutingModule
  ],
  entryComponents:[AtividadeModalComponent]
})
export class PortalAlunoModule { }
