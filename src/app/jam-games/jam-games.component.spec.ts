import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamGames } from './jam-games.component';

describe('JamGames', () => {
  let component: JamGames;
  let fixture: ComponentFixture<JamGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JamGames],
    }).compileComponents();

    fixture = TestBed.createComponent(JamGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
