import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballPlayPropsComponent } from './basketball-play-props.component';

describe('BasketballPlayPropsComponent', () => {
  let component: BasketballPlayPropsComponent;
  let fixture: ComponentFixture<BasketballPlayPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballPlayPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketballPlayPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
