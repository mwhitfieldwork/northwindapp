import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardService } from './dashboard.service';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

const routes:Routes =[
  {path: 'dashboard', component:DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent
  ],
  providers:[DashboardService],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    DashboardComponent,
    NavComponent
  ]
})
export class DashboardModule { }
