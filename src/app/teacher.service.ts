import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherserviceService {


  baseUrl="http://localhost:8080";
  constructor(private _http:HttpClient) { }

  addteacher(teacher:Teacher){
    return this._http.post(`${this.baseUrl}/teacher`,teacher);
  }

  updateeTeacher(teacher:Teacher){
    return this._http.post(`${this.baseUrl}/teacher`,teacher);
  }

  getteacherByid(tid:any){
    return this._http.get<Teacher>(`${this.baseUrl}/teacher/${tid}`);
  }


getallTeacher(){
  return this._http.get<Teacher>(`${this.baseUrl}/teacher`);
}


deleteteacher(tid:any){
return this._http.delete(`${this.baseUrl}/teacher/${tid}`);
}

}
