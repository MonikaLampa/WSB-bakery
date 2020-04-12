import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeListComponent } from './cake/cake-list/cake-list.component';
import { CookiesListComponent } from './cookies/cookies-list/cookies-list.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [CakeListComponent, CookiesListComponent],
  imports: [
    CommonModule
    
  ]
})
export class ProductsModule { }
