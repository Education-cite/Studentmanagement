import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherserviceService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{


  teachers:Teacher[]=[];

  //rule two
/*
  teachers:Teacher={
    tId:'',
    tName:'',
    tEmail:'',
    tPhone:'',
    address:''
  }*/

  constructor(private _teasherservice:TeacherserviceService,private router:Router){}
  ngOnInit(): void {
    this._teasherservice.getallTeacher().subscribe((data:any)=>{
      this.teachers=data;
      console.log(data);
    })
  }

update(tId:any){
this.router.navigate(["update-t",tId])
}

delete(tId:any){
this._teasherservice.deleteteacher(tId).subscribe((data:any)=>{
  alert("data deleted successfully");
},
(error)=>{
  alert("error loading data!!");
})
}


}
