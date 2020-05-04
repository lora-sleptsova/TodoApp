import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCrossLine]'
})
export class CrossLineDirective {

  constructor(private el: ElementRef) {
      el.nativeElement.style.textDecoration = "line-through";
   }

}
