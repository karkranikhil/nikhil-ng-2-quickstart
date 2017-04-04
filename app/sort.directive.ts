import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[sort]'
})
export class SortDirective {
    constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) { }
 


    @Input() set sort(DataToSort: any[]) {
    
      // If condition is true add template to DOM
      DataToSort.sort(function(a,b) {
            if (a.name < b.name)
                 return -1;
            if (a.name > b.name)
                  return 1;
             return 0;
            });
      this.viewContainer.createEmbeddedView(this.templateRef);
    } 
  }
