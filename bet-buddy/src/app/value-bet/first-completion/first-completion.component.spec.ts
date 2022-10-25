import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompletionComponent } from './first-completion.component';

describe('FirstCompletionComponent', () => {
  let component: FirstCompletionComponent;
  let fixture: ComponentFixture<FirstCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
