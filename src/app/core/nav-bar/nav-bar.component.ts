import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogin:boolean;
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.isLogin = this.authService.getLogged();
  }

  login(){
    this.authService.login();
    this.isLogin = this.authService.getLogged();
  }
  logout(){
    this.authService.logout();
    this.isLogin = this.authService.getLogged();
  }

}
