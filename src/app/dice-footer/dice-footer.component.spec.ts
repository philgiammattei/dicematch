import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceFooterComponent } from './dice-footer.component';

describe('DiceFooterComponent', () => {
  let component: DiceFooterComponent;
  let fixture: ComponentFixture<DiceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
