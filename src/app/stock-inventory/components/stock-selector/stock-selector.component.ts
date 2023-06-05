import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  stockProducts: Product[];
   // parent form group
  
  constructor() { }

  ngOnInit(): void {
  }

}
