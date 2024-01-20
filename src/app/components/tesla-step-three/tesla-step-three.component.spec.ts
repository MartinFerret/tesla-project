import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStepThreeComponent } from './tesla-step-three.component';

describe('TeslaStepThreeComponent', () => {
  let component: TeslaStepThreeComponent;
  let fixture: ComponentFixture<TeslaStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaStepThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
