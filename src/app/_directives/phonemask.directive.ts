import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[digit-mask]'
})
export class PhonemaskDirective {

  constructor(private element:ElementRef) {
      console.log(this.element);
   }
}
