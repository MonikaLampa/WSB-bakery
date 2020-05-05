import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklightDirective } from './backlight.directive';



@NgModule({
  declarations: [BacklightDirective],
  imports: [
    CommonModule
  ],
  exports:[
    BacklightDirective
  ]
})
export class SharedModule { }
