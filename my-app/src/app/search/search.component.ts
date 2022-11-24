import { EventEmitter, Injectable, Output } from '@angular/core';
import { FilterByNamePipe } from './../filterByName.pipe';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from 'src/@typings/Course';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [DataService]
})
export class SearchComponent {

  constructor(private service: DataService, private filterPipe: FilterByNamePipe) { }

  @Output() emitter:EventEmitter<Course[]> = new EventEmitter<Course[]>();

  Search(searchTitle:string) {
    var filteredCourses = this.filterPipe.transform(this.service.courses, searchTitle);
    //console.log(filteredCourses);
    this.service.courses = filteredCourses;
    //this.emitter.emit(filteredCourses);
    //console.log(this.service.courses);
  }
}
