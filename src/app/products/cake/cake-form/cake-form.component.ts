import { Component, OnInit, Inject } from "@angular/core";
import { Cake } from "../model";
import { CakeService } from "../cake.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cake-form",
  templateUrl: "./cake-form.component.html",
  styleUrls: ["./cake-form.component.css"],
})
export class CakeFormComponent implements OnInit {
  description: string = "";
  image: string = "";
  mass: number;
  name: string;
  price: number;
  headerTitle: string = "Dodaj nowy tort";
  isUpdate: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cake,
    private cakeService: CakeService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<CakeFormComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.hasOwnProperty("name")) {
      this.isUpdate = true;
      this.setCakeUpdateProperty();
    }
  }

  submitForm(form: NgForm) {
    if (this.isUpdate) this.updateCake();
    else {
      this.addCake();
      form.resetForm();
    }
  }

  addCake() {
    this.cakeService
      .addCake({
        name: this.name,
        description: this.description,
        image: this.image,
        mass: this.mass,
        price: this.price,
      })
      .then(
        this.onCreatingSuccess.bind(this),
        this.onCreatingFailure.bind(this)
      );
    // format.resetForm();
    // this.dialogRef.close();
  }

  updateCake() {
    this.cakeService
      .updateCake(this.data.key, {
        name: this.name,
        description: this.description,
        image: this.image,
        mass: this.mass,
        price: this.price,
      })
      .then(
        this.onCreatingSuccess.bind(this),
        this.onCreatingFailure.bind(this)
      );
    this.dialogRef.close();
  }

  private onCreatingSuccess() {
    this.toast.open("Zapisano !", "", {
      panelClass: "toast-success",
    });
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, "", {
      panelClass: "toast-error",
    });
  }
  private setCakeUpdateProperty() {
    this.headerTitle = "Edytuj produkt";
    this.description = this.data.description;
    this.image = this.data.image;
    this.mass = this.data.mass;
    this.name = this.data.name;
    this.price = this.data.price;
  }
}
