import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasirComponent } from './kasir.component';

describe('KasirComponent', () => {
  let component: KasirComponent;
  let fixture: ComponentFixture<KasirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KasirComponent);
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
