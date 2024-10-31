import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  fullName: string = '';
  establishment: string = '';
  registrationNumber: number | null = null;
  ribPersonnel: string = '';
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const imageUrl = event.target.result;
        this.router.navigate(['/card'], {
          queryParams: {
            fullName: this.fullName,
            establishment: this.establishment,
            registrationNumber: this.registrationNumber,
            ribPersonnel: this.ribPersonnel,
            selectedFile: imageUrl
          }
        });
      };
      reader.readAsDataURL(this.selectedFile); 
    }
  }
}
