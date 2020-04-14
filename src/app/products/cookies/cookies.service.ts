import { Injectable } from '@angular/core';
import { Cookies } from './model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  private API_URL = "/cookies"
  constructor(private angFireDatabase :AngularFireDatabase) { }

  getCookies(): Observable<Cookies[]> {
   
    return  this.angFireDatabase.list<Cookies>(this.API_URL).valueChanges();
   // .map(customers => customers.slice(0,this.config.customerLimit));

  }
}
