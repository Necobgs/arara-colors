import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductDetailsComponent } from './modal-product-details.component';

describe('ModalProductDetailsComponent', () => {
  let component: ModalProductDetailsComponent;
  let fixture: ComponentFixture<ModalProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
