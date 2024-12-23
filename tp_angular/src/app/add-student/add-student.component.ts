import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student-service.service';
import { EstablishmentService } from '../services/establishment-service.service';
import { Establishment } from '../model/Establishment';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent  implements OnInit{

  constructor(private router:Router , private studentService:StudentService) {}
  
  student = {
    id: 0, 
    firstname: '',
    lastname: '',
    email: '',
    year: '',
  };


  ngOnInit(): void {
    
  }

  submitForm(form: any): void {
    if (form.valid) {
      this.studentService.addStudent(this.student).subscribe((response) => {
        this.router.navigate(['listSudents']);
      });

    }
  }

}
