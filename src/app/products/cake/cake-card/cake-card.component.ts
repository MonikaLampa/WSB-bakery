import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../model';
import { MatDialog } from '@angular/material/dialog';
import {CakeDelDialogComponent } from '../cake-del-dialog/cake-del-dialog.component';
import { CakeNewFormComponent } from '../cake-new-form/cake-new-form.component';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {

  @Input() cake: Cake;

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDeleteDialog(cake:Cake){
   this.dialog.open(CakeDelDialogComponent, {
    data: cake,
  }); 
  }
  
  openUpdateDialog(cake : Cake){
    //console.log(`ciastko ` +JSON.stringify(cake));
    this.dialog.open(CakeNewFormComponent, {
      data: cake,
    }); 
    
  }

}
