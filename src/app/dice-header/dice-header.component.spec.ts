import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceHeaderComponent } from './dice-header.component';

describe('DiceHeaderComponent', () => {
  let component: DiceHeaderComponent;
  let fixture: ComponentFixture<DiceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
