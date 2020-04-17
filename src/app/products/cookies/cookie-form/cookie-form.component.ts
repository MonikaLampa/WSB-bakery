import { Component, OnInit, Inject } from "@angular/core";
import { Cookie } from '../model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookiesService } from '../cookies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-cookie-form",
  templateUrl: "./cookie-form.component.html",
  styleUrls: ["./cookie-form.component.css"],
})
export class CookieFormComponent implements OnInit {
  description: string = "";
  image: string = "";
  name: string;
  price: number;
  headerTitle: string = "Dodaj ciasteczka";
  isUpdate: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cookie,
    private cookieService: CookiesService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<CookieFormComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.hasOwnProperty("name")) {
      this.isUpdate = true;
      this.setCookieUpdateProperty();
    } 
  }
  private setCookieUpdateProperty() {
    this.headerTitle = "Edytuj ciasteczko";
    this.description = this.data.description;
    this.image = this.data.image;
    this.name = this.data.name;
    this.price = this.data.price;
  }

  saveCookie() {
    this.cookieService
      .addCookie({
        name: this.name,
        description: this.description,
        image: this.image,
        price: this.price
      })
      .then(
        this.onCreatingSuccess.bind(this),
        this.onCreatingFailure.bind(this)
      );
    this.dialogRef.close();
  }

  updateCookie() {
    this.cookieService
      .updateCookie(this.data.key,{
        name: this.name,
        description: this.description,
        image: this.image,
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
}
