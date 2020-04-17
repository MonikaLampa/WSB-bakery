import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatIconModule } from '@angular/material/icon';
const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
};

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig= {
  width:'500px',
  disableClose: true,
  hasBackdrop: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
 
  ]
})
export class MaterialModule { }
