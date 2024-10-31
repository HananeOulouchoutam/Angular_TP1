import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private formData = new BehaviorSubject<any>(null);
  currentData = this.formData.asObservable();

  updateData(data: any) {
    this.formData.next(data);
  }
}
