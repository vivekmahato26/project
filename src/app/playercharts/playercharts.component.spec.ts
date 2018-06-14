import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerchartsComponent } from './playercharts.component';

describe('PlayerchartsComponent', () => {
  let component: PlayerchartsComponent;
  let fixture: ComponentFixture<PlayerchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
