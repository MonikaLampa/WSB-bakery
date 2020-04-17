import { Component, OnInit, Inject } from "@angular/core";
import { CookiesService } from "../cookies.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cookie } from "../model";

@Component({
  selector: "app-cookie-del-dialog",
  templateUrl: "./cookie-del-dialog.component.html",
  styleUrls: ["./cookie-del-dialog.component.css"],
})
export class CookieDelDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cookie,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<CookieDelDialogComponent>,
    private cookieService: CookiesService
  ) {}

  ngOnInit(): void {}
  deleteCookie() {
    this.cookieService
      .deleteCookie(this.data)
      .then(
        this.onCreatingSuccess.bind(this),
        this.onCreatingFailure.bind(this)
      );
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open("Produkt został usunięty !", "", {
      panelClass: "toast-success",
    });
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, "Błąd podczas usuwania", {
      panelClass: "toast-error",
    });
  }
}
