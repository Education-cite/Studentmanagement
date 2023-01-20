import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [

  {path:"students",component:StudentListComponent,} , 
  {path:"",component:StudentListComponent,} , 

  { path:"create",component:CreateStudentComponent, },
  { path:"update-student/:sId",component:UpdateStudentComponent, },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
