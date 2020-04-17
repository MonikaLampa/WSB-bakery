import { Injectable } from "@angular/core";
import { Cookie } from "./model";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CookiesService {
  private API_URL = "/cookies";
  constructor(private angFireDatabase: AngularFireDatabase) {}

  getCookies(): Observable<Cookie[]> {
    return this.angFireDatabase
      .list<Cookie>(this.API_URL)
      .snapshotChanges()
      .pipe(map((response) => response.map((cake) => this.assignKey(cake))));
  }
  private assignKey(cake) {
    return { ...cake.payload.val(), key: cake.key };
  }
  deleteCookie(cookie: Cookie) {
    return this.angFireDatabase.list<Cookie>(this.API_URL).remove(cookie.key);
  }
  addCookie(cookie: Cookie) {
    return this.angFireDatabase.list<Cookie>(this.API_URL).push(cookie);
  }
  updateCookie(key: string, cookie: Cookie) {
    return this.angFireDatabase.list<Cookie>(this.API_URL).update(key, cookie);
  }
}
