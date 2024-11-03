import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductFeaturesComponent } from './modal-product-features.component';

describe('ModalProductFeaturesComponent', () => {
  let component: ModalProductFeaturesComponent;
  let fixture: ComponentFixture<ModalProductFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProductFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalProductFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
