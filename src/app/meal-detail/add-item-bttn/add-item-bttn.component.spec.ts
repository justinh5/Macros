import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemBttnComponent } from './add-item-bttn.component';

describe('AddItemBttnComponent', () => {
  let component: AddItemBttnComponent;
  let fixture: ComponentFixture<AddItemBttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemBttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemBttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
