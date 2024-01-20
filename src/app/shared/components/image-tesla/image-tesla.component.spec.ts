import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTeslaComponent } from './image-tesla.component';

describe('ImageTeslaComponent', () => {
  let component: ImageTeslaComponent;
  let fixture: ComponentFixture<ImageTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTeslaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
