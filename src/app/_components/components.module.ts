import { NgModule } from '@angular/core';
import { SelectorbyobjectComponent } from './selector/selectorbyobject/selectorbyobject.component';
import { SelectorbyindexComponent } from './selector/selectorbyindex/selectorbyindex.component';
import { BarGraphComponent } from './graphs/bar-graph/bar-graph.component';
import { ComponentchildComponent } from './explore/componentchild/componentchild.component';

@NgModule({
  declarations: [
    SelectorbyobjectComponent,
    SelectorbyindexComponent,
    BarGraphComponent,
    ComponentchildComponent,
  ],
  imports: [],
  providers: [],
    exports:[SelectorbyobjectComponent,SelectorbyindexComponent,BarGraphComponent,ComponentchildComponent,]
})
export class SharedComponentsModule { }