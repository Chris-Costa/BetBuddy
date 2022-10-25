import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalsComponent } from './card-totals.component';

describe('CardTotalsComponent', () => {
  let component: CardTotalsComponent;
  let fixture: ComponentFixture<CardTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTotalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
