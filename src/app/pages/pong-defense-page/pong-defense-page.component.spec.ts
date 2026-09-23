import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongDefensePage } from './pong-defense-page.component';

describe('PongDefensePage', () => {
  let component: PongDefensePage;
  let fixture: ComponentFixture<PongDefensePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PongDefensePage],
    }).compileComponents();

    fixture = TestBed.createComponent(PongDefensePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
