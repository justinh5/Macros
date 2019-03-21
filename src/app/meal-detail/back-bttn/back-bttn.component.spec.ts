import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackBttnComponent } from './back-bttn.component';

describe('BackBttnComponent', () => {
  let component: BackBttnComponent;
  let fixture: ComponentFixture<BackBttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackBttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackBttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
