import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student-service.service';
import { Student } from '../model/Student';  // Assurez-vous que 'Student' est bien importé
import { EstablishmentService } from '../services/establishment-service.service';

@Component({
  selector: 'app-affecter-establishment',
  templateUrl: './affecter-establishment.component.html',
  styleUrls: ['./affecter-establishment.component.css']
})

export class AffecterEstablishmentComponent implements OnInit {
  id: number | null = null; 
  student?: Student;  
  establishments: any[] = []; 
  establishmentId: number | null = null; // ID de l'établissement sélectionné

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private establishmentService: EstablishmentService , 
    private router:Router ,
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;  
      if (isNaN(this.id)) {
        console.error('ID invalide :', idParam);
        this.id = null; 
      } else {
        console.log('ID extrait:', this.id);
        
        this.student = this.studentService.findById(this.id);
        
        if (this.student) {
          console.log('Étudiant trouvé:', this.student);
        } else {
          console.error('Aucun étudiant trouvé avec cet ID');
        }
        this.establishmentService.findAllEstablishments().subscribe(establishments => {
          this.establishments = establishments;  
        });
        
      }
    } else {
      console.error('Aucun ID trouvé dans l\'URL.');
    }
  }

  affecterEtablissement(): void {
    if (this.student && this.establishmentId !== null) {
      this.studentService.updateEtablissementPourEtudiant(this.student.id, this.establishmentId)
        .then(() => {
          this.router.navigate(['listSudents']); 
          console.log('Établissement affecté avec succès !');
        })
        .catch(error => {
          console.error('Erreur lors de l\'affectation de l\'établissement:', error);
        });
    } else {
      console.log('Étudiant ou établissement non sélectionné');
    }
  }
}
