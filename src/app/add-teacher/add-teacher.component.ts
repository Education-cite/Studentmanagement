import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherserviceService } from '../teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit{


  teacher:Teacher=new Teacher();

  constructor(private _teacherservice:TeacherserviceService){}
  ngOnInit(): void {

  }

  addteacher(){
    this._teacherservice.addteacher(this.teacher).subscribe((data:any)=>{
      alert("Teacher data save successfully");
    },(error)=>{
      alert("Error in loading data");
    })
  }

}
