import { Component, OnInit } from "@angular/core";
import { CookiesService } from "../cookies.service";
import { Cookie } from "../model";
import { CookieFormComponent } from "../cookie-form/cookie-form.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "src/app/core/auth.service";

@Component({
  selector: "app-cookies-list",
  templateUrl: "./cookies-list.component.html",
  styleUrls: ["./cookies-list.component.css"],
})
export class CookiesListComponent implements OnInit {
  cookie: Cookie = null;
  cookies: Cookie[];

  constructor(
    private cookiesService: CookiesService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCookies();
  }
  private getCookies() {
    this.cookiesService.getCookies().subscribe((response) => {
      this.cookies = response;
      this.cookie = this.cookies[0];
    });
  }

  openCookieForm() {
    this.dialog.open(CookieFormComponent, {
      data: {},
    });
  }
  checkAuthorization() {
    return this.authService.getLogged();
  }
}
