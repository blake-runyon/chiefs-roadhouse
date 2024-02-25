import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadonlyTableComponent } from '../../components/readonly-table/readonly-table.component';
import { mockMenuItemsColumn } from '../../../mock/menu';
import { Column } from '../../../types/common';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../../types/menu';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [ReadonlyTableComponent],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css'
})
export class AdminMenuComponent {
  businessId: string | undefined;
  cols: Column[] = mockMenuItemsColumn;
  menuItems: MenuItem[] | undefined;
  selectedItem: MenuItem | undefined;

  constructor(private _activatedRoute: ActivatedRoute, private _menuService: MenuService, private _router: Router) {
    this._activatedRoute.params.subscribe((param) => {
      this.businessId = param['id'];
    });

    if(this.businessId !== null || this.businessId !== undefined) {
      this._menuService.getMenuItemByBusinessId(parseInt(this.businessId!)).subscribe((items) => {
        this.menuItems = items;
      })
    }
  }

  handleEdit(menuItem: MenuItem) {
    this.selectedItem = menuItem;
    this._router.navigateByUrl(`admin/menu/${this.businessId}/${menuItem.id}`);
  }

  handleSelect(menuItem: MenuItem | undefined) {
    this.selectedItem = menuItem;
  }
}
