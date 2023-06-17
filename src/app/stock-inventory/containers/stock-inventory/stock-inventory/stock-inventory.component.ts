import { Component, Input, OnInit } from '@angular/core';
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
  stockProducts: Product[];
  
  form = new FormGroup({
    store:new FormGroup({
      branch:new FormControl(''),
      code:new FormControl(''),
    }),
    selector: this.createStock({}),
    stock:new FormArray([
      this.createStock({product_id:1,quantity:10}),
      this.createStock({product_id:2,quantity:20}),
    ])

  })

  createStock(stock){
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id,10) || ''),
      quantity: new FormControl(stock.quantity || 10)   
    });
  }

  constructor(private _productsService2: ProductStockService ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productsService2.getProducts()
    .subscribe(products => { 
      this.stockProducts = products    
  

    },
    error => this.errorMessage = <any>error)
  }
 
  addStock(stock){
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  onSubmit(){
    console.log("submit", this.form.value);
  }
}
