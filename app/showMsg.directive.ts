import { Directive, ElementRef, Input, Renderer,HostListener } from '@angular/core';
@Directive({
  selector: '[showMsg]'
})
export class showMsgDirective {
    constructor(private elem: ElementRef, private renderer: Renderer){}
     @HostListener('click', ['$event'])
     showMe(event: Event) {
    return alert("hhello");
  }
 
  }
