import { Component, OnInit } from '@angular/core';
import { Establishment } from '../model/Establishment';
import { EstablishmentService } from '../services/establishment-service.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-establishment',
  templateUrl: './add-establishment.component.html',
  styleUrls: ['./add-establishment.component.css']  
})
export class AddEstablishmentComponent implements OnInit {

  establishment: Establishment = {
    id: 0, 
    name: '',
    address: '',
    students: []
  };

  constructor(private establishmentService: EstablishmentService , private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.establishmentService.addEstablishment(this.establishment).subscribe((response) => {
      this.router.navigate(['listEtab']);
    });
    this.establishment = { id: 0, name: '', address: '', students: [] };
  }
}
