import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaleComponent } from './card-sale.component';

describe('CardSaleComponent', () => {
  let component: CardSaleComponent;
  let fixture: ComponentFixture<CardSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
