import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent implements OnInit {
  @Input()
  parent:FormGroup; // parent form group

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  remove(i:number){
    
  }
}
