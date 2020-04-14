import { Component, OnInit, Input } from '@angular/core';
import { Cookies } from '../model';

@Component({
  selector: 'app-cookie-card',
  templateUrl: './cookie-card.component.html',
  styleUrls: ['./cookie-card.component.css']
})
export class CookieCardComponent implements OnInit {

  @Input() cookie : Cookies;
  
  constructor() { }

  ngOnInit(): void {
  }

}
