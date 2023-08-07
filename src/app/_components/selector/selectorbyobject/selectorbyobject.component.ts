import { Component, Input, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-selectorbyobject',
  templateUrl: './selectorbyobject.component.html',
  styleUrls: ['./selectorbyobject.component.css']
})
export class SelectorbyobjectComponent implements OnInit {
  @Input() collection;
  @Output() selectedObject = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem($event){
    let item = $event;
    this.selectedObject.emit(item);
  }

}
