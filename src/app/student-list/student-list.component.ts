import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  students:Student[]=[];
  constructor(private studentservice:StudentServiceService,private router:Router){}
  ngOnInit(): void {
    
    this.studentservice.getallstudent().subscribe((data)=>{
      this.students=data;
  })
  }


    update(sId:any){
      this.router.navigate(["update-student",sId]);
    }

    delete(sId:any){
        this.studentservice.deletestudentByid(sId).subscribe(Data=>{
          alert('student data deleted');
        },(error)=>{
          alert('Error data loading');

        })
    }

    

}
