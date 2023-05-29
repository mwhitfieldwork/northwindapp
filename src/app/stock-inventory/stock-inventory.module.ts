import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';



@NgModule({
  declarations: [StockBranchComponent, StockProductsComponent],
  imports: [
    CommonModule
  ]
})
export class StockInventoryModule { }
