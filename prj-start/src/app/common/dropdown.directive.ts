import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // edit the Manage Recipes dropdown so that on click it opens
  @HostBinding('class.open') private isOpen: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    // if (this.isOpen) {
    //   this.renderer.removeClass(this.elementRef.nativeElement, 'btn-group');
    //   this.renderer.addClass(this.elementRef.nativeElement, 'btn-group open');
    // }
    // else {
    //   this.renderer.removeClass(this.elementRef.nativeElement, 'btn-group open');
    //   this.renderer.addClass(this.elementRef.nativeElement, 'btn-group');
    // }
    this.isOpen = !this.isOpen;
  
  }

}
