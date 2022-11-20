import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcComponent } from './rhc.component';

describe('RhcComponent', () => {
  let component: RhcComponent;
  let fixture: ComponentFixture<RhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
