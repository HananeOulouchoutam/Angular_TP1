import { Component, OnInit } from '@angular/core';
import { Establishment } from '../model/Establishment';
import { EstablishmentService } from '../services/establishment-service.service';

@Component({
  selector: 'app-list-establishments',
  templateUrl: './list-establishments.component.html',
  styleUrls: ['./list-establishments.component.css']  // Correction: "styleUrl" -> "styleUrls"
})
export class ListEstablishmentsComponent implements OnInit {

  establishments: Establishment[] = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.establishmentService.findAllEstablishments().subscribe(
      data => {
        if (Array.isArray(data)) {
          this.establishments = data;
        } else {
          console.error("Données reçues invalides:", data);  // Vérification de la structure des données
        }
      },
      error => {
        console.error("Il y a une erreur lors de la récupération des établissements", error);  // Message d'erreur amélioré
      }
    );
  }
}
