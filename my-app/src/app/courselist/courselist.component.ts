import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Course } from '../../@typings/Course'
import { DataService } from '../data.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.sass'],
  providers:[DataService]
})
export class CourselistComponent implements OnInit {
  courses: Course[];
  constructor(private dataService: DataService) {
    this.courses = dataService.courses;
   }

  DeleteCourse(event: number){
    console.log(event);
  }

  ngOnInit(): void {

  }

  ngDoCheck(){
  }

  identify(index: number, item: Course) {
    return item;
 }

}
