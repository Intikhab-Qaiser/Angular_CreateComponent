import { Component } from '@angular/core';
import Course from 'src/@typings/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  courses: Course[] = [];

  LoadMore(){
    console.log('load more');
  }

  ngOnInit(){
    this.courses = [
      new Course(1, "Course-1", new Date(2001, 5, 10), 100, "Course-1 Description", "Course-1 Author.FirstName","Course-1 Author.SecondName"),
      new Course(2, "Course-2", new Date(2015, 5, 10), 100, "Course-2 Description", "Course-2 Author.FirstName","Course-2 Author.SecondName"),
      new Course(3, "Course-3", new Date(2004, 5, 10), 100, "Course-3 Description", "Course-3 Author.FirstName","Course-3 Author.SecondName"),
    ];
  }


}






