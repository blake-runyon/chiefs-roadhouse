import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-business',
  standalone: true,
  imports: [],
  templateUrl: './admin-business.component.html',
  styleUrl: './admin-business.component.css'
})
export class AdminBusinessComponent {
  businessId: string | undefined;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param) => {
      this.businessId = param['id'];
    })
  }
}
