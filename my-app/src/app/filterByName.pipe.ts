import { DataService } from './data.service';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/@typings/Course';

@Injectable({
  providedIn: 'root'
})
@Pipe({name: 'filterByName'})
export class FilterByNamePipe implements PipeTransform {

    constructor(){}
    transform(courses : Course[], title: string): Course[] {
        if (title) {
            var filterCourses = courses.filter((listing: any) => listing.Title === title);
            return filterCourses;
        }

        return courses;
    }
}
