import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import {SelectorbyindexComponent} from '../../selector/selectorbyindex/selectorbyindex.component'
import { ComponentchildComponent } from '../../explore/componentchild/componentchild.component';

@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() data:unknown[];


  ngOnInit(): void {
  }
  ngAfterViewInit(): void { 

  }

}
