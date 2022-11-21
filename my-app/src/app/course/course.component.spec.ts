import { Course } from 'src/@typings/Course';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Component, Input, IterableDiffers } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let course:  Course;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();

    course = { Id: 1, Title: "Course-1", CreationDate: new Date(2001, 5, 10), Duration: 100,
                Description: "Course-1 Description", AuthorFirstName: "Course-1 Author.FirstName", AuthorSecondName: "Course-1 Author.SecondName"};

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check title text', () => {
    let queryByHeader = fixture.debugElement.query(By.css("h2"));
    expect(queryByHeader).toBeTruthy();
    expect(queryByHeader.nativeElement).toBeTruthy();
    expect(queryByHeader.nativeElement.outerText).toContain("Course-1");
  });

  it('should check description text', () => {
    let div = fixture.debugElement.query(By.css("#description"));
    expect(div.nativeElement.outerText).toContain("Course-1 Description");
  });

  it('should check duration text', () => {
    let div = fixture.debugElement.query(By.css("#duration"));
    expect(div.nativeElement.outerText).toContain("100");
  });

  it('should emit on click', () => {
    spyOn(component.delete, 'emit');
    let button = fixture.nativeElement.querySelector('#deletebutton');//querySelector('button').query(By.css("#deletebutton"));
    console.log(button);
    button.dispatchEvent(new Event('click'));

    expect(component.delete.emit).toHaveBeenCalledWith(1);
 });

});
