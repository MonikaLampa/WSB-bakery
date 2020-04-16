import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeListComponent } from './cake/cake-list/cake-list.component';
import { CookiesListComponent } from './cookies/cookies-list/cookies-list.component';
import { CakeCardComponent } from './cake/cake-card/cake-card.component';
import { CakeService } from './cake/cake.service';
import { CookieCardComponent } from './cookies/cookie-card/cookie-card.component';
import { CookiesService } from './cookies/cookies.service';
import { CoreModule } from '../core/core.module';
import { CakeDelDialogComponent } from './cake/cake-del-dialog/cake-del-dialog.component';
import { CakeNewFormComponent } from './cake/cake-new-form/cake-new-form.component';
import { CakeNewDialogComponent } from './cake/cake-new-dialog/cake-new-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CakeListComponent, CookiesListComponent, CakeCardComponent, CookieCardComponent, CakeDelDialogComponent, CakeNewFormComponent, CakeNewDialogComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule 
  ],
  providers:[
    CakeService,
    CookiesService
  ]
})
export class ProductsModule { }
