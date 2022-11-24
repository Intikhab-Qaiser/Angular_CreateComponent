import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/@typings/Course';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    return courses.sort((a,b) => a.CreationDate.valueOf() - b.CreationDate.valueOf());
  }
}
