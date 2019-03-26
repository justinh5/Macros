import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MealsService } from '../services/meals.service';
import { EditMealComponent } from './edit-meal.component';


describe('EditMealComponent', () => {
  let component: EditMealComponent;
  let fixture: ComponentFixture<EditMealComponent>;
  let testBedService: MealsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditMealComponent ],
      providers: [MealsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedService = TestBed.get(MealsService);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('service injected via inject(...) and TestBed.get(...) should be the same instance', () => {
    inject([MealsService], (injectedService: MealsService) => {
      expect(injectedService).toBe(testBedService);
    });
  });


});
