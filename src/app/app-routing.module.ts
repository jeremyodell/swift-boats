import { SailorsComponent } from './sailors/sailors.component';
import { BoatsComponent } from './boats/boats/boats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';


import { AddGuestComponent } from './add-guest/add-guest.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'swift-boats', component: BoatsComponent },
  { path: 'sailors', component: SailorsComponent },
  { path: 'add-guest', component: AddGuestComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
