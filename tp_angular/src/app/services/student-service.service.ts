import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { Observable, of } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  private students: Student[] = [];
  private lastId: number = 0;

  constructor() {
    this.loadStudents();
  }

  private loadStudents() {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      this.students = JSON.parse(savedStudents);
      this.lastId = this.students.length > 0 ? this.students[this.students.length - 1].id : 0; 
    }
  }

  private saveStudents() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  addStudent(student: Student): Observable<Student> {
    student.id = ++this.lastId;  
    this.students.push(student);  
    this.saveStudents(); 
    return of(student);  
  }

  findAllStudents(): Observable<Student[]> {
    return of(this.students);  
  }

  async updateEtablissementPourEtudiant(studentId: number, establishmentId: number): Promise<void> {
    const student = this.students.find(s => s.id === studentId);
    if (student) {
      student.establishementId = establishmentId; // correction de la faute
      await this.saveStudents(); // Assurez-vous que saveStudents est asynchrone si nécessaire
    } else {
      throw new Error('Étudiant non trouvé'); // Utilisation de throw pour rejeter la promesse
    }
  }
  

  findById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }
}
