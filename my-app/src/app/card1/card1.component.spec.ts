import { ComponentFixture, TestBed } from '@angular/core/testing';

import { card1Component } from './card1.component';

describe('card1Component', () => {
  let component: card1Component;
  let fixture: ComponentFixture<card1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ card1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(card1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
