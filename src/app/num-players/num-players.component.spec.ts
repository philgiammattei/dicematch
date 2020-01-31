import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPlayersComponent } from './num-players.component';

describe('NumPlayersComponent', () => {
  let component: NumPlayersComponent;
  let fixture: ComponentFixture<NumPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
