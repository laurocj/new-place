import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../atividade-list/atividade-list.component';

@Component({
  selector: 'app-atividade-modal',
  templateUrl: './atividade-modal.component.html',
  styleUrls: ['./atividade-modal.component.scss']
})
export class AtividadeModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AtividadeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
