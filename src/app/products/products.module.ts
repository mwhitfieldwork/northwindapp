import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule} from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { DialogOverviewExampleDialog } from './products.component';

import { ProductsService } from './products.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ProductDetailComponent } from './details/product-detail.component'
import { PhonemaskDirective } from '../_directives/phonemask.directive';
import { TooltipDirective}from '../_directives/tooltip.directive';

const routes:Routes = [
  {path: '', component: ProductsComponent},
  {path: 'details/new', component: ProductDetailComponent, data: {isEdit: false}},
  {path: 'details/:id', component: ProductDetailComponent, data: {isEdit: true}},
]

@NgModule({
  declarations: [
    ProductsComponent,
    PhonemaskDirective,
    TooltipDirective,
    DialogOverviewExampleDialog,
    ProductDetailComponent],
  providers:[ProductsService],
  exports:[
    ProductsComponent,
    DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DashboardModule
  ]
})
export class ProductsModule { }
