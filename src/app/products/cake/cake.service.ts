import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cake } from './model';
@Injectable({
  providedIn: 'root'
})
export class CakeService {

  private API_URL = '/cake';

  constructor(private angFireDatabase: AngularFireDatabase) { }

  getCakes(): Observable<Cake[]> {
   
    return  this.angFireDatabase.list<Cake>(this.API_URL).snapshotChanges()
    .pipe(map(response => response.map(cake => this.assignKey(cake))));
  }
  private assignKey(cake) {
    return { ...cake.payload.val(), key: cake.key }
  }
  deleteCake(cake : Cake){
    return this.angFireDatabase.list<Cake>(this.API_URL).remove(cake.key);
  }
  addCake(cake: Cake) {
    return this.angFireDatabase.list<Cake>(this.API_URL).push(cake);
   }

}
