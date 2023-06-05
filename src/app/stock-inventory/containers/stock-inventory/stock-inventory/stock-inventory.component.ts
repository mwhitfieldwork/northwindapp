import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';
import { Product } from 'src/app/_models/product';
import { ProductStockService } from 'src/app/_services/product-stock.service';


@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  errorMessage:string;
  stockProducts: Product[]
  
  form = new FormGroup({
    store:new FormGroup({
      branch:new FormControl(''),
      code:new FormControl(''),
    }),
    selector: new FormGroup({
      product_id:new FormControl(''),
      quantity:new FormControl('10'),
    }),
    stock:new FormArray([])

  })

  constructor(private _productsService2: ProductStockService ) { }

  ngOnInit(): void {
  }

  getProducts(){
    this._productsService2.getProducts()
    .subscribe(products => { 
      this.stockProducts = products    
  

    },
    error => this.errorMessage = <any>error)
  }
 

  onSubmit(){
    console.log("submit", this.form.value);
  }
}
