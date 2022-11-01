import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modul2Component } from './card2.component';

describe('Modul2Component', () => {
  let component: Modul2Component;
  let fixture: ComponentFixture<Modul2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modul2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modul2Component);
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

