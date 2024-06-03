import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'componentchild',
  templateUrl: './componentchild.component.html',
  styleUrls: ['./componentchild.component.css']
})
export class ComponentchildComponent implements OnInit {
  @Input() name:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
