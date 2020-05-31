import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectone]'
})
export class DirectoneDirective {

  constructor(myel: ElementRef) { 
    myel.nativeElement.style.color="red";
  }

}
