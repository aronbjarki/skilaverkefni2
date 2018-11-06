import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailFullComponent } from './player-detail-full.component';

describe('PlayerDetailFullComponent', () => {
  let component: PlayerDetailFullComponent;
  let fixture: ComponentFixture<PlayerDetailFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
