import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
 

  baseUrl="http://localhost:8080";

  constructor(private _http:HttpClient) {  }



      addstudent(student:Student){
        return this._http.post(`${this.baseUrl}/student`,student);
      }


      getallstudent(){
        return this._http.get<Student[]>(`${this.baseUrl}/student`);
      }

      getstudentByid(sId:any){
        return this._http.get<Student[]>(`${this.baseUrl}/student/${sId}`);
      }



      updatestudent(student: Student) {
        return this._http.post<Student>(`${this.baseUrl}/student`,student);

      }


      deletestudentByid(sId:any){
        return this._http.delete(`${this.baseUrl}/student/${sId}`);
      }
}
