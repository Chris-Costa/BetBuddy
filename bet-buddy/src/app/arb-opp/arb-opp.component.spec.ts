import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbOppComponent } from './arb-opp.component';

describe('ArbOppComponent', () => {
  let component: ArbOppComponent;
  let fixture: ComponentFixture<ArbOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbOppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
