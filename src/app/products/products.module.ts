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

const routes:Routes = [
  {path: '', component: ProductsComponent}
  //{path: 'products', component: ProductsComponent}
]

@NgModule({
  declarations: [
    ProductsComponent,
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
