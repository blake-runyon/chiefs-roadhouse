import { Injectable } from '@angular/core';
import { mockMenuItems } from '../../mock/menu';
import { MenuItem } from '../../types/menu';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[] = mockMenuItems;
  constructor() { }

  getMenuItemByBusinessId(id: number): Observable<MenuItem[] | undefined> {
    return of(this.menuItems.filter(v => v.businessId === id));
  }
}
