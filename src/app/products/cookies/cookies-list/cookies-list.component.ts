import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { Cookies } from '../model';

@Component({
  selector: 'app-cookies-list',
  templateUrl: './cookies-list.component.html',
  styleUrls: ['./cookies-list.component.css']
})
export class CookiesListComponent implements OnInit {

  cookie: Cookies = null;
  cookies: Cookies[];

  constructor(private cookiesService: CookiesService) { }

  ngOnInit(): void {
    this.getCookies();
  }
  private getCookies() {
    this.cookiesService.getCookies().subscribe(response => {
      this.cookies = response;
      this.cookie = this.cookies[0];
    })
  }

}
