import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnOrderComponent } from './adminn-order.component';

describe('AdminnOrderComponent', () => {
  let component: AdminnOrderComponent;
  let fixture: ComponentFixture<AdminnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
