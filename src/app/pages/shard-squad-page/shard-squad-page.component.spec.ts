import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardSquadPage } from './shard-squad-page.component';

describe('ShardSquadPage', () => {
  let component: ShardSquadPage;
  let fixture: ComponentFixture<ShardSquadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShardSquadPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ShardSquadPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
