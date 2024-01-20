import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStepOneComponent } from './tesla-step-one.component';

describe('TeslaStepOneComponent', () => {
  let component: TeslaStepOneComponent;
  let fixture: ComponentFixture<TeslaStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaStepOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
