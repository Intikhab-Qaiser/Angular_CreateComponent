import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  @Input() course: ICourse;
  @Output() courseId: number;

  constructor() { }

  ngOnInit(): void {
    console.log('Course ngOnInit')
  }

  ngOnChanges(): void{
    console.log('Course ngOnChanges')
  }

  ngDoCheck(): void{
    console.log('Course ngDoCheck')
  }

  ngAfterContentInit(): void{
    console.log('Course ngAfterContentInit')
  }

  ngAfterContentChecked(): void{
    console.log('Course ngAfterContentChecked')
  }

  ngAfterViewInit(): void{
    console.log('Course ngAfterViewInit')
  }

  ngAfterViewChecked(): void{
    console.log('Course ngAfterViewChecked')
  }

  ngOnDestroy():void{
    console.log('Course ngOnDestroy')
  }

  EditCourse(){

  }

  DeleteCourse(courseId: number){
    console.log(courseId);
  }

}

