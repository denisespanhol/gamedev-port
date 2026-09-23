import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalGames } from './professional-games.component';

describe('ProfessionalGames', () => {
  let component: ProfessionalGames;
  let fixture: ComponentFixture<ProfessionalGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalGames],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
