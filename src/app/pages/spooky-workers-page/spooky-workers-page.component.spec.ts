import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpookyWorkersPage } from './spooky-workers-page.component';

describe('SpookyWorkersPage', () => {
  let component: SpookyWorkersPage;
  let fixture: ComponentFixture<SpookyWorkersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpookyWorkersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SpookyWorkersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
