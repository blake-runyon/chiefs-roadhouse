import { Component } from '@angular/core';
import { MenuItem } from '../../../types/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  menuClosed = true;
  profileMenuClosed = true;
  menuItems: MenuItem[]

  constructor() {
    this.menuItems = [
      {
        label: 'Dashboard',
        link: '/admin/1',
        isActive: false
      },
      {
        label: 'Manage Menu',
        link: '/admin/menu/1',
        isActive: false
      },
      {
        label: 'Manage Business',
        link: '/admin/business/1',
        isActive: false
      },
      {
        label: 'Settings',
        link: '/admin/settings/1',
        isActive: false
      },
    ]
  }

  toggleMenu() {
    this.menuClosed = !this.menuClosed;
  }

  toggleProfileMenu() {
    this.profileMenuClosed = !this.profileMenuClosed;
  }
}
