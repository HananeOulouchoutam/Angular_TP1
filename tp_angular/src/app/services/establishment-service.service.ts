import { Injectable } from '@angular/core';
import { Establishment } from '../model/Establishment';  // Assurez-vous que votre modèle Establishment est bien défini
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  private establishments: Establishment[] = [];  
  private lastId: number = 0;  

  constructor() {
    this.loadEstablishments();
  }

  private loadEstablishments(): void {
    const storedEstablishments = localStorage.getItem('establishments');
    if (storedEstablishments) {
      this.establishments = JSON.parse(storedEstablishments);
      this.lastId = this.establishments.length ? Math.max(...this.establishments.map(est => est.id)) : 0;
    }
  }

  private saveEstablishments(): void {
    localStorage.setItem('establishments', JSON.stringify(this.establishments));
  }

  addEstablishment(establishment: Establishment): Observable<Establishment> {
    establishment.id = ++this.lastId;  
    this.establishments.push(establishment);  
    this.saveEstablishments();  
    return of(establishment);  
  }

  findAllEstablishments(): Observable<Establishment[]> {
    return of(this.establishments);
  }

  findById(id: number): Observable<Establishment | undefined> {
    const establishment = this.establishments.find((est) => est.id === +id);
    return of(establishment); 
  }
  

  deleteEstablishment(id: number): Observable<boolean> {
    const index = this.establishments.findIndex((est) => est.id === id);
    if (index !== -1) {
      this.establishments.splice(index, 1);  
      this.saveEstablishments();  
      return of(true);  
    }
    return of(false);  
  }
}
