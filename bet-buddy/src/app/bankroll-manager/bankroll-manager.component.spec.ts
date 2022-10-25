import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankrollManagerComponent } from './bankroll-manager.component';

describe('BankrollManagerComponent', () => {
  let component: BankrollManagerComponent;
  let fixture: ComponentFixture<BankrollManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankrollManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankrollManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
