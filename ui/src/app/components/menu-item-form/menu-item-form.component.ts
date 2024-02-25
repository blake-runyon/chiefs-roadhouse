import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../../types/menu';

@Component({
  selector: 'app-menu-item-form',
  standalone: true,
  imports: [],
  templateUrl: './menu-item-form.component.html',
  styleUrl: './menu-item-form.component.css'
})
export class MenuItemFormComponent {
  businessId: string | undefined;
  itemId: string | undefined;
  menuItem: MenuItem | undefined;

  constructor(private _activatedRoute: ActivatedRoute, private _menuService: MenuService) {
    this._activatedRoute.params.subscribe((param) => {
      this.businessId = param['businessId'];
      this.itemId = param['menuItemId'];
    });

    if((this.businessId !== null || this.businessId !== undefined) && (this.itemId !== null || this.itemId !== undefined)) {
      this._menuService.getMenuItemByBusinessId(parseInt(this.businessId!)).subscribe((items) => {
        if(items !== undefined || items !== null) {
          this.menuItem = items?.find(v => v.id === parseInt(this.itemId!));
        }
      })
    }
  }
}
