import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Cake } from '../model';
import { MatDialog } from '@angular/material/dialog';
import { CakeNewDialogComponent } from '../cake-new-dialog/cake-new-dialog.component';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  cake: Cake = null;
  cakes: Cake[];


  constructor(
    private cakeService: CakeService,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.refreshCakeList();   
  }
  
  private refreshCakeList() {
    this.cakeService.getCakes().subscribe((response) => {
      this.cakes = response;
      this.cake = this.cakes[0];
    });
  }
  openNewCakeDialog(){
    this.dialog.open(CakeNewDialogComponent);
  }
}
