import { Component, Input, OnInit } from '@angular/core';
//import {FormControl, FormGroup, FormArray} from '@angular/forms'; FormControl is a diffrent way of doing it
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms'; // Using Formbuilder is short hand
import { Product } from 'src/app/_models/product';
import { ProductStockService } from 'src/app/_services/product-stock.service';
import { StockValidators } from 'src/app/stock-inventory/containers/stock-inventory/stock-inventory/stock-inventory.validators';
@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  
  constructor(private _productsService2: ProductStockService , 
    private fb:FormBuilder) { }

  errorMessage:string;
  stockProducts: Product[];
  
   /*form = new FormGroup({
    store:new FormGroup({
      branch:new FormControl(''),
      code:new FormControl(''),
    }), Long hand */
    form = this.fb.group({
      store:this.fb.group ({
        //branch:new FormControl(''), long hand
        //code:new FormControl(''), long hand
        branch:['', [Validators.required,StockValidators.checkBranch]] ,//Form builder short hand
        code:['', Validators.required] , //Form builder short hand
      }),
    selector: this.createStock({}),
    stock:this.fb.array([
      this.createStock({product_id:1,quantity:10}),
      this.createStock({product_id:2,quantity:20}),
    ])

  })

  createStock(stock){
    return this.fb.group({
      product_id: parseInt(stock.product_id,10) || '',
      quantity: stock.quantity || 10
    });
  }

 

  ngOnInit(): void {
    this.getProducts();

    this.form.get('stock').valueChanges.subscribe(stock => {
      console.log(stock); //do this every time the stock field changes
    });
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

  removeStock({group,index}:{group:FormGroup,index:number}){
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
    console.log(group, index) 
  }

  onSubmit(){
    console.log("submit", this.form.value);
  }
}
