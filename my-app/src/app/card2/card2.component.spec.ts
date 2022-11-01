import { ComponentFixture, TestBed } from '@angular/core/testing';

import { card2Component } from './card2.component';

describe('Modul2Component', () => {
  let component: card2Component;
  let fixture: ComponentFixture<card2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ card2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(card2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

