import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CakeListComponent } from './products/cake/cake-list/cake-list.component';
import { CookiesListComponent } from './products/cookies/cookies-list/cookies-list.component';
import { CakeNewFormComponent } from './products/cake/cake-new-form/cake-new-form.component';


const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'}, 
  {path:'main',component:MainComponent},
  {path:'cookies',component:CookiesListComponent},
  {path:'cake',component:CakeListComponent},
  {path:'add',component:CakeNewFormComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
