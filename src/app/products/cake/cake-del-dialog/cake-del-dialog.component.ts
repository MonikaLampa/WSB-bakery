import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CakeService } from '../cake.service';
import { Cake } from '../model';

@Component({
  selector: 'app-cake-del-dialog',
  templateUrl: './cake-del-dialog.component.html',
  styleUrls: ['./cake-del-dialog.component.css']
})
export class CakeDelDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cake,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<CakeDelDialogComponent>,
    private cakeService : CakeService) { }

  ngOnInit(): void {
  }

  deleteCake(){
    this.cakeService.deleteCake(this.data)
    .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
    }
  
  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Produkt został usunięty !', '', { panelClass: 'toast-success'});
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, 'Błąd podczas usuwania', { panelClass: 'toast-error'});
  }

}
