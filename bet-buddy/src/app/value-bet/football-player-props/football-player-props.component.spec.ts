import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPlayerPropsComponent } from './football-player-props.component';

describe('FootballPlayerPropsComponent', () => {
  let component: FootballPlayerPropsComponent;
  let fixture: ComponentFixture<FootballPlayerPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballPlayerPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballPlayerPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
