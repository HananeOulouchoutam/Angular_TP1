import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { ListStudentsComponent } from './list-students/list-students.component';
import { RouterOutlet } from '@angular/router';
import { AddEstablishmentComponent } from './add-establishment/add-establishment.component';
import { AffecterEstablishmentComponent } from './affecter-establishment/affecter-establishment.component';
import { ListEstablishmentsComponent } from './list-establishments/list-establishments.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent,
    AddEstablishmentComponent,
    AffecterEstablishmentComponent,
    ListEstablishmentsComponent , 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
