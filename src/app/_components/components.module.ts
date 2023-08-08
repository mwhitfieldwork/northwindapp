import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SelectorbyobjectComponent } from './selector/selectorbyobject/selectorbyobject.component';
import { SelectorbyindexComponent } from './selector/selectorbyindex/selectorbyindex.component';

@NgModule({
  declarations: [
    SelectorbyobjectComponent,
    SelectorbyindexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ],
  providers: [],
  exports:[SelectorbyobjectComponent,SelectorbyindexComponent]
})
export class SharedComponentsModule { }