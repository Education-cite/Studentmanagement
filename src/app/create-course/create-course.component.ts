import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit{

 course: Course= new Course();
   

  constructor(private _courseservice:CourseService){}
  ngOnInit(): void {
    
  }



addform(){
   this._courseservice.addCourse(this.course).subscribe((data)=>{
    alert("Course data save successfully");
    console.log(data);
  },(error)=>{
    alert("Error in loading data");
  })
}


}
