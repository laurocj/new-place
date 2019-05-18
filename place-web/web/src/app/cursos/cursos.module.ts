import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoComponent } from './curso/curso.component';
import { AtividadeListComponent } from './atividades/atividade-list/atividade-list.component';
import { AtividadeComponent } from './atividades/atividade/atividade.component';
import { AtividadeModalComponent } from './atividades/atividade-modal/atividade-modal.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane, faPlus);

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursoListComponent,
     CursoComponent,
     AtividadeListComponent,
     AtividadeComponent,
     AtividadeModalComponent
    ],
  imports: [
    CommonModule,
    CursosRoutingModule,
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
    ReactiveFormsModule
  ],
  entryComponents:[AtividadeModalComponent]
})
export class CursosModule { }
