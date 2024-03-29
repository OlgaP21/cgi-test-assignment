/**
 * https://jhapriti09.medium.com/autofocus-directive-that-works-in-angular-10-db352ef70399
 */

import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocusDirective]'
})
export class AutoFocusDirectiveDirective implements AfterContentInit {
  
  constructor(private el: ElementRef) { }

  public ngAfterContentInit(): void {
      this.el.nativeElement.focus();
  }

}
