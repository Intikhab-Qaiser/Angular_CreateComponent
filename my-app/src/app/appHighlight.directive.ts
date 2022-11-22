import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appCourseHighlight]'
})
export class HighlightDirective {

  @Input() courseCreationDate: string;

  constructor(private eleRef: ElementRef) {
    }

    ngAfterViewInit(): void {
      this.setBorderLine();
   }

  private setBorderLine() {

    let creationDate = new Date(this.courseCreationDate);
    let todayDate = new Date();
    let currentDateInMs = todayDate.valueOf();
    let fouteenDaysInMs = 1000 * 60 * 60 * 24 * 14;
    let fouteenDayLess = new Date(currentDateInMs - fouteenDaysInMs);

    if(creationDate < todayDate &&
      creationDate >= fouteenDayLess ) {
      this.eleRef.nativeElement.style.border = "2px solid green";
      }
    else if(creationDate > todayDate) {
      this.eleRef.nativeElement.style.border = "2px solid blue";
    }
  }
}
