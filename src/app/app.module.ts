import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MainComponent } from './main/main.component';
import { ProductsModule } from './products/products.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import 'firebase/database'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    //ProductsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

