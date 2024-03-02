import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../../types/menu';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './menu-item-form.component.html',
  styleUrl: './menu-item-form.component.css'
})
export class MenuItemFormComponent {
  businessId: string | undefined;
  itemId: string | undefined;
  menuItem: MenuItem | undefined;
  menuForm: FormGroup;

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

    this.menuForm = new FormGroup({
      name: new FormControl(this.menuItem?.name),
      price: new FormControl(this.menuItem?.price),
      description: new FormControl(this.menuItem?.description),
      avaliable: new FormControl(this.menuItem?.avaliable),
    })
  }

  onSubmit() {
    console.log(this.menuForm.value)
  }
}
