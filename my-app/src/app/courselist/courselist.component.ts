import { Component, OnInit } from '@angular/core';
import { Course } from '../../@typings/Course'

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.sass']
})
export class CourselistComponent implements OnInit {
  courses: Course[] = [];
  constructor() { }

  ngOnInit(){
    this.courses = [
      {Id: 1, Title: "Course-1", CreationDate: new Date(2023, 5, 10), Duration: 100,Description: "Course-1 Description",
      AuthorFirstName: "Course-1 Author.FirstName", AuthorSecondName: "Course-1 Author.SecondName", TopRated: false},
      {Id: 2, Title: "Course-2", CreationDate: new Date(2015, 5, 10), Duration: 100,Description: "Course-2 Description",
      AuthorFirstName: "Course-2 Author.FirstName", AuthorSecondName: "Course-2 Author.SecondName", TopRated: true},
      {Id: 3, Title: "Course-3", CreationDate: new Date(2022, 10, 20), Duration: 100,Description: "Course-3 Description",
      AuthorFirstName: "Course-3 Author.FirstName", AuthorSecondName: "Course-3 Author.SecondName", TopRated: false},
      {Id: 4, Title: "Course-4", CreationDate: new Date(2004, 5, 10), Duration: 100,Description: "Course-4 Description",
      AuthorFirstName: "Course-4 Author.FirstName", AuthorSecondName: "Course-4 Author.SecondName", TopRated: true},
      {Id: 5, Title: "Course-5", CreationDate: new Date(2004, 5, 10), Duration: 100,Description: "Course-5 Description",
      AuthorFirstName: "Course-5 Author.FirstName", AuthorSecondName: "Course-5 Author.SecondName", TopRated: false},
    ];
  }

  DeleteCourse(event: number){
    console.log(event);
  }

  identify(index: number, item: Course) {
    return item;
 }

}
