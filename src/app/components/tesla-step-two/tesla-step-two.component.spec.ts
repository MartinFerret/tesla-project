import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStepTwoComponent } from './tesla-step-two.component';

describe('TeslaStepTwoComponent', () => {
  let component: TeslaStepTwoComponent;
  let fixture: ComponentFixture<TeslaStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaStepTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
