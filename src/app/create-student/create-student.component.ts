import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student:Student =new Student();

  constructor(private studentservice:StudentServiceService){}

  ngOnInit(): void {

  }

  addstudent(){

    this.studentservice.addstudent(this.student).subscribe((data:any)=>{
      alert("Student data save successfully");
    },(error)=>{
      alert("Error in loading data");
    })
  }

}
