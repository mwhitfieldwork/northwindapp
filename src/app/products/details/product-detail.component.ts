import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{Product} from '../../_models/product';

import { ProductsService }from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productForm:FormGroup;
  errorMessage:string;
  ratedProduct:Product;
  isEdit!:boolean;
  

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data.isEdit;

    this.productForm = this.fb.group({
      productname:['', Validators.required],
      phone:['', Validators.required],
      crediCard:['', Validators.required],
      unitPrice:['', Validators.required],
      quantity:['', Validators.required],
      rating:['', Validators.required],
      discontinued:'',
      store: new FormGroup({
        branch: new FormControl(''),
        code: new FormControl('')
      })
    })

    if(this.isEdit){
      this.callExistingProduct();
    }
    
  }

  update(productForm){
    console.log(productForm.value);
  }

  create(payload){
    console.log(payload.value);

    let newProduct = {
      categoryId: 1,
      discontinued: false,
      productId: 0,
      productName: payload.value.productname,
      quantityPerUnit: payload.value.quantity,
      reorderLevel: 0,
      supplierId: 1,
      unitPrice: payload.value.unitPrice,
      unitsInStock: 0,
      unitsOnOrder: 0
    }

    this._productsService.createProduct(newProduct).subscribe(product => {
      console.log(product); 
    });
  }

  callExistingProduct(){
    let productId = this.route.snapshot.paramMap.get('id');

    this._productsService.getProduct(productId).subscribe(product => { 
      this.ratedProduct = product;
      this.productForm.get('productname').setValue(this.ratedProduct.productName)
      this.productForm.get('quantity').setValue(this.ratedProduct.quantityPerUnit);
      this.productForm.get('unitPrice').setValue(this.ratedProduct.unitPrice);
      //this.productForm.get('rating').setValue(this.ratedProduct.rating);
    },
    error => this.errorMessage = <any>error)
    
  }

  }
