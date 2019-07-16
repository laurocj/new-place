import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeEditorComponent } from './atividade-editor.component';

describe('AtividadeEditorComponent', () => {
  let component: AtividadeEditorComponent;
  let fixture: ComponentFixture<AtividadeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
