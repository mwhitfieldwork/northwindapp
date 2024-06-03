import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentchildComponent } from './componentchild.component';

describe('ComponentchildComponent', () => {
  let component: ComponentchildComponent;
  let fixture: ComponentFixture<ComponentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
