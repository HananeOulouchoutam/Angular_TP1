import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddEstablishmentComponent } from './add-establishment/add-establishment.component';
import { AffecterEstablishmentComponent } from './affecter-establishment/affecter-establishment.component';
import { ListEstablishmentsComponent } from './list-establishments/list-establishments.component';

const routes: Routes = [
  {path:'add' , component:AddStudentComponent}  , 
  {path:'listSudents' , component:ListStudentsComponent} , 
  {path:'add-establishment' , component:AddEstablishmentComponent},
  {path:'affecter-establishment/:id' , component:AffecterEstablishmentComponent } , 
  {path:'listEtab' , component:ListEstablishmentsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
