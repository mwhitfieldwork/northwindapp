import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{Product} from '../../_models/product';

import { ProductModel } from '../../_models/product-model';
import { ProductsService }from '../products.service';
import { Category } from 'src/app/_models/category';

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
  productId:string;
  updateProduct:ProductModel;
  categories:Category[];
  

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router,
              private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data.isEdit;
    this.getCategories();
    this.productForm = this.fb.group({
      productname:['', Validators.required],
      unitPrice:['', Validators.required],
      quantity:['', Validators.required],
      category:['', Validators.required],
      store: new FormGroup({
        branch: new FormControl(''),
        code: new FormControl('')
      })
    })

    if(this.isEdit){
      this.callExistingProduct();
    }

  }

  getCategories(){
    this._productsService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    })
  }

  update(productForm){

    var productUpdate = {...this.updateProduct, "productId": this.productId,
      "productName": productForm.value.productname,
      "quantityPerUnit": productForm.value.quantity,
      "unitPrice": productForm.value.unitPrice,
      "CategoryId": productForm.value.category}

    //console.log(productForm.value);
    this._productsService.updateProduct(productUpdate, this.productId).subscribe(product => {
      console.log(product);
      this.router.navigate(['/products']);
    })
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
      this.router.navigate(['/products']);
    });
  }

  callExistingProduct(){
    this.productId = this.route.snapshot.paramMap.get('id');

    this._productsService.getProduct(this.productId).subscribe(product => { 
      this.ratedProduct = product;
      this.productForm.get('productname').setValue(this.ratedProduct.productName)
      this.productForm.get('quantity').setValue(this.ratedProduct.quantityPerUnit);
      this.productForm.get('unitPrice').setValue(this.ratedProduct.unitPrice);
      //this.productForm.get('rating').setValue(this.ratedProduct.rating);
    },
    error => this.errorMessage = <any>error)
    
  }

  }
