import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../products';

import { ProductsService }from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productForm:FormGroup;
  errorMessage:string;
  ratedProduct:IProducts;
  

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productname:['', Validators.required],
      unitPrice:['', Validators.required],
      quantity:['', Validators.required],
      rating:['', Validators.required],
      discontinued:''
    })

    this.callExistingProduct();
  }

  save(){
    console.log('save');
  }

  callExistingProduct(){
    let productId = this.route.snapshot.paramMap.get('id');

    this._productsService.getProduct(productId).subscribe(product => { 
      this.ratedProduct = product;
      this.productForm.get('productname').setValue(this.ratedProduct.productName)
      this.productForm.get('quantity').setValue(this.ratedProduct.quantityPerUnit);
      this.productForm.get('unitPrice').setValue(this.ratedProduct.unitPrice);
      this.productForm.get('rating').setValue(this.ratedProduct.rating);
    },
    error => this.errorMessage = <any>error)
    
  }
  }
