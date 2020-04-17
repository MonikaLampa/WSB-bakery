import { Component, OnInit, Input } from "@angular/core";
import { Cookie } from "../model";
import { MatDialog } from "@angular/material/dialog";
import { CookieDelDialogComponent } from "../cookie-del-dialog/cookie-del-dialog.component";
import { CookieFormComponent } from "../cookie-form/cookie-form.component";
import { AuthService } from "src/app/core/auth.service";

@Component({
  selector: "app-cookie-card",
  templateUrl: "./cookie-card.component.html",
  styleUrls: ["./cookie-card.component.css"],
})
export class CookieCardComponent implements OnInit {
  @Input() cookie: Cookie;

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {}

  openDeleteDialog(cookie: Cookie) {
    this.dialog.open(CookieDelDialogComponent, {
      data: cookie,
    });
  }

  openUpdateDialog(cookie: Cookie) {
    this.dialog.open(CookieFormComponent, {
      data: cookie,
    });
  }
  checkAuthorization() {
    return this.authService.getLogged();
  }
}
