import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{


  courses:Course[]=[];

  constructor(private _courservice:CourseService,private _router:Router){}
  ngOnInit(): void {
    
     this._courservice.getAllCourse().subscribe((data:any)=>{
      this.courses=data;
    })

  }


   delete(cid:any){
    this._courservice.deleteCourse(cid).subscribe((data:any)=>{
      alert("course Deleted Successfully");
    },(error)=>{
      alert("Loading data server error");
    })
   }

   update(cid:any){
    this._router.navigate(['update-course',cid]);

   }

}
