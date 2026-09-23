import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolentHeartsPage } from './violent-hearts-page.component';

describe('ViolentHeartsPage', () => {
  let component: ViolentHeartsPage;
  let fixture: ComponentFixture<ViolentHeartsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolentHeartsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ViolentHeartsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
