import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ToolbarComponent, NavBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
    
  ],
  exports:[
    ToolbarComponent,
    MaterialModule   
  ]
})
export class CoreModule { }
