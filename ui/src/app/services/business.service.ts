import { Injectable } from '@angular/core';
import { Business } from '../../types/business';
import { mockBusiness } from '../../mock/business';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  businesses: Business[] = [mockBusiness];
  constructor() { }

  getBusinessById(id: number): Observable<Business | undefined> {
    return of(this.businesses.find(v => v.id === id));
  }
}
