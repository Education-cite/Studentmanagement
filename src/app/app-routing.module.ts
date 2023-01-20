import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [

  {path:"students",component:StudentListComponent,} , 
  {path:"",component:StudentListComponent,} , 

  { path:"create",component:CreateStudentComponent, },
  { path:"update-student/:sId",component:UpdateStudentComponent, },

  {path:'add',component:CreateCourseComponent},
  {path:'list',component:CourseListComponent},
  { path:"addt",component:AddTeacherComponent },
  {path:"listt",component:TeacherListComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
