import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appBacklight]",
})
export class BacklightDirective {
  constructor(private element: ElementRef) {}

  @HostListener("mouseenter") activateBackLight() {
    this.element.nativeElement.style.color = "#7B1FA2";
    this.element.nativeElement.style.fontWeight = "bold";
  }
  @HostListener("mouseleave") deactivateBackLight() {
    this.element.nativeElement.style.color = null;
    this.element.nativeElement.style.fontWeight = "normal";
  }
}
