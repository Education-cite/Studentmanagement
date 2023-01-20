import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = "http://localhost:8080/course"


  constructor(private _http: HttpClient) { }


  addCourse(course: Course) {
    return this._http.post(this.baseUrl + '/', course)
  }
  


  getAllCourse():Observable<any> {
    return this._http.get(this.baseUrl+'/getallcourse')

  }


  getCourse(cid:any):Observable<any>{
    return this._http.get(this.baseUrl+'/getcourse/'+cid)

  }


  updateCourse(course: Course): Observable<any> {
    return this._http.post(this.baseUrl + '/', course)}


  deleteCourse(cid:number){
    return this._http.delete(this.baseUrl+'/deletecourse/'+cid)

  }



}
