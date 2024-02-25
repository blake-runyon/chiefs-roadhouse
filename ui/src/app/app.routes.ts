import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminBusinessComponent } from './pages/admin-business/admin-business.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { AdminSettingsComponent } from './pages/admin-settings/admin-settings.component';
import { MenuItemFormComponent } from './components/menu-item-form/menu-item-form.component';

export const routes: Routes = [
  {
    path: 'admin/:id',
    component: AdminDashboardComponent
  },
  {
    path: 'admin/business/:id',
    component: AdminBusinessComponent
  },
  {
    path: 'admin/menu/:id',
    component: AdminMenuComponent
  },
  {
    path: 'admin/settings/:id',
    component: AdminSettingsComponent
  },
  {
    path: 'admin/menu/:businessId/:menuItemId',
    component: MenuItemFormComponent
  }
];