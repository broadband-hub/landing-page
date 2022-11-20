import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErateComponent } from './erate.component';

describe('ErateComponent', () => {
  let component: ErateComponent;
  let fixture: ComponentFixture<ErateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
