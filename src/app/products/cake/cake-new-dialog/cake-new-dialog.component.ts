import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cake-new-dialog',
  templateUrl: './cake-new-dialog.component.html',
  styleUrls: ['./cake-new-dialog.component.css']
})
export class CakeNewDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CakeNewDialogComponent>
  ) { }

  ngOnInit(): void {

  }

  onSaveCake(emitString: string) {
    if (emitString == "closeDialog") this.dialogRef.close();
  }

}
