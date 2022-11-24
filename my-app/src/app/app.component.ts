import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/@typings/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';

  //@Output() emitter: EventEmitter<Course[]> = new EventEmitter<Course[]>();


  ListCourse(courses: Course[]) {
    console.log(courses);
    return courses;
  }

  LoadMore(){
    console.log('load more');
  }

}






