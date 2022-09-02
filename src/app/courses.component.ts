import {Component} from '@angular/core';
//import { CoursesService } from './course.service';
@Component({
  selector: 'courses',
  template: `
  <h2>Courses</h2>
  <ul>
    <li *ngFor="let course of courses"> {{course}}</li>
  </ul>
  `
})
export class CoursesComponent{
  courses=['course1','course2','course3'];
  // constructor(service: CoursesService){
  //   this.courses = service.getCourse();
  // }
}

