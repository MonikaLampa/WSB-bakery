import { Component, OnInit } from '@angular/core';
import { Cake } from '../model';

@Component({
  selector: 'app-cake-new-form',
  templateUrl: './cake-new-form.component.html',
  styleUrls: ['./cake-new-form.component.css']
})
export class CakeNewFormComponent implements OnInit {

  cake : Cake;
  submitted : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  newCustomer(){

  }
  onSubmit() {
    this.submitted = true;
    //this.save();
  }

}
