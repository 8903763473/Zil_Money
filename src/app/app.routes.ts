import { Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

export const routes: Routes = [
    { path: "", redirectTo: '/user/user-table', pathMatch: "full" },
    { path: "user/user-table", component: UserTableComponent }
];
