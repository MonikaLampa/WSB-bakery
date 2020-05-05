import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CakeListComponent } from "./cake/cake-list/cake-list.component";
import { CookiesListComponent } from "./cookies/cookies-list/cookies-list.component";
import { CakeCardComponent } from "./cake/cake-card/cake-card.component";
import { CakeService } from "./cake/cake.service";
import { CookieCardComponent } from "./cookies/cookie-card/cookie-card.component";
import { CookiesService } from "./cookies/cookies.service";
import { CoreModule } from "../core/core.module";
import { CakeDelDialogComponent } from "./cake/cake-del-dialog/cake-del-dialog.component";
import { CakeFormComponent } from "./cake/cake-form/cake-form.component";
import { FormsModule } from "@angular/forms";
import { CookieFormComponent } from './cookies/cookie-form/cookie-form.component';
import { CookieDelDialogComponent } from './cookies/cookie-del-dialog/cookie-del-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CakeListComponent,
    CookiesListComponent,
    CakeCardComponent,
    CookieCardComponent,
    CakeDelDialogComponent,
    CakeFormComponent,
    CookieFormComponent,
    CookieDelDialogComponent,
  ],
  imports: [CommonModule, CoreModule, FormsModule,SharedModule],
  providers: [CakeService, CookiesService],
})
export class ProductsModule {}
