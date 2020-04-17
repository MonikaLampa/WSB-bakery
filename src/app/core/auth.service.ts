import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLogged: boolean = false;

  constructor() {}

  login() {
    this.isLogged = true;
  }
  logout() {
    this.isLogged = false;
  }
  getLogged(){
    return this.isLogged;
  }
}
