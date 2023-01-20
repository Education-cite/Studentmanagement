import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherserviceService } from '../teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{

  teacher:Teacher=new Teacher();
  tid!:any;
  constructor(private _teacherservice:TeacherserviceService,private ActivateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.tid=this.ActivateRoute.snapshot.params['tid']
    this._teacherservice.getteacherByid(this.tid).subscribe((data:any)=>{
      this.teacher=data;
    })
  }

  update(){
    this._teacherservice.updateeTeacher(this.teacher).subscribe((data:any)=>{
      alert("Teacher updated successfully")
    },(error)=>{
      alert("Teacher updated Error!!")

    })
  }
}
