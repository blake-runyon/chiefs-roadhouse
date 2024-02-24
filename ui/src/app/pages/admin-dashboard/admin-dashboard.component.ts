import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  businessId: string | undefined;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param) => {
      this.businessId = param['id'];
    })
  }
}
