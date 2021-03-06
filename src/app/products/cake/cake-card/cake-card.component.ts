import { Component, OnInit, Input } from "@angular/core";
import { Cake } from "../model";
import { MatDialog } from "@angular/material/dialog";
import { CakeDelDialogComponent } from "../cake-del-dialog/cake-del-dialog.component";
import { CakeFormComponent } from "../cake-form/cake-form.component";
import { AuthService } from "src/app/core/auth.service";

@Component({
  selector: "app-cake-card",
  templateUrl: "./cake-card.component.html",
  styleUrls: ["./cake-card.component.css"],
})
export class CakeCardComponent implements OnInit {
  @Input() cake: Cake;

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {}

  openDeleteDialog(cake: Cake) {
    this.dialog.open(CakeDelDialogComponent, {
      data: cake,
    });
  }

  openUpdateDialog(cake: Cake) {
    this.dialog.open(CakeFormComponent, {
      data: cake,
    });
  }
  checkAuthorization() {
    return this.authService.getLogged();
  }
}
