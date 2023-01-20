import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  course:Course=new Course();
  cid!:any;
  constructor(private _courseservice:CourseService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.cid=this.activatedroute.snapshot.params['cid']
    this._courseservice.getCourse(this.cid).subscribe((data)=>{
      this.course=data;
    })
  }


updateform(){
  this._courseservice.updateCourse(this.course).subscribe((data:any)=>{
    alert("Course updated sucessfully")
  },(error)=>{
    alert("Course Loaded Error!!")

  })
}










}
