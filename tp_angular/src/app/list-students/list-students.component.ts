import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student-service.service';
import { EstablishmentService } from '../services/establishment-service.service';
import { Student } from '../model/Student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: Student[] = [];
  establishmentsMap: { [key: number]: string } = {}; 

  constructor(
    private studentService: StudentService,
    private establishmentService: EstablishmentService 
  ) {}

  ngOnInit(): void {
    this.studentService.findAllStudents().subscribe((data: Student[]) => {
      this.students = data;

      this.students.forEach(student => {
        if (student.establishementId != null) {  
          this.establishmentService.findById(student.establishementId).subscribe({
            next: data => this.establishmentsMap[student.id] = data?.name || '',
            error: error => {
              console.error("Il y a une erreur", error); 
            }
          });
        }
      });
    }, error => {
      console.log('Erreur lors de la récupération des étudiants', error);
    });
    console.log(this.establishmentsMap);
  }
}
