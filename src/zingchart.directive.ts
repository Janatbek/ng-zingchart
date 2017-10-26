import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[zingchartDirective]'
})
export class ZingChartDirective {

  constructor(private el: ElementRef) {
  }

}
