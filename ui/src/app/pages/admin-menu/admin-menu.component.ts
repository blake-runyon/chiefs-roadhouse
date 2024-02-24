import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css'
})
export class AdminMenuComponent {
  businessId: string | undefined;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param) => {
      this.businessId = param['id'];
    })
  }
}
