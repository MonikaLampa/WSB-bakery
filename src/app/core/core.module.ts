import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from './auth.service';


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
  ],
  providers:[AuthService]
})
export class CoreModule { }
