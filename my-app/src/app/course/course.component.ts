import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/@typings/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  @Input()
  course: Course;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(): void{
    console.log('Course ngOnChanges')
  }

  ngOnInit(): void {
    console.log('Course ngOnInit')
  }

  ngDoCheck(){
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

  Edit(){

  }

  Delete(){
    this.delete.emit(this.course.Id);
  }

}

