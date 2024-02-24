import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.css'
})
export class AdminSettingsComponent {
  businessId: string | undefined;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param) => {
      this.businessId = param['id'];
    })
  }
}
