import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("submit", this.form.value);
  }
}
