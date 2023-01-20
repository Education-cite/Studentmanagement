import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  student:Student=new Student();
  sId!:any;
  constructor(private router:Router, private activeroute:ActivatedRoute,private studentservice:StudentServiceService){}
  ngOnInit(): void {
  this.sId =  this.activeroute.snapshot.params['sId']
  this.studentservice.getstudentByid(this.sId).subscribe((data:any)=>{
    this.student=data;
  })
  }






  updatestudent(){
      this.studentservice.updatestudent(this.student).subscribe((data:any)=>{
        alert("data update successfully");
        this.router.navigate(['/']);

      },(error)=>{
        alert("Error in loading data");
      })
  }






}
