import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cake } from '../model';
import { CakeService } from '../cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cake-new-form',
  templateUrl: './cake-new-form.component.html',
  styleUrls: ['./cake-new-form.component.css']
})
export class CakeNewFormComponent implements OnInit {

  @Output() savedCake = new EventEmitter<string>(); //zapisano formularz

  description: string = "";
  image: string = "";
  mass: number;
  name: string;
  price: number;
  headerTitle : string = "Dodaj nowy tort"

  constructor(
    private cakeService: CakeService,
    private toast: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
 
  saveNewCake() {

    this.cakeService.addCake({
      name: this.name,
      description: this.description,
      image: this.image,
      mass: this.mass,
      price: this.price,
    }).then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));

    this.savedCake.emit('closeDialog');
  }

    private onCreatingSuccess() {
      this.toast.open('Tort został dodany !', '', { panelClass: 'toast-success'});
    }
  
    private onCreatingFailure(error) {
      this.toast.open(error.message, '', { panelClass: 'toast-error'});
    }

}
